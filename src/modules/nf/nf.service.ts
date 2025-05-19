import { HttpException } from "../../errors/HttpException";
import { createApiClient } from "../../infra/api";
import prisma from "../../instances/prisma/prisma";
import { CreateNotaFiscalDto } from "./dto/create-nf.dto";
import { errorsHtppCode } from "./errors/types";
import { StatusNf } from "../../enum/Status";
import dotenv from "dotenv";

dotenv.config();

export class NFService {
  async findAll() {
    return await prisma.notaFiscal.findMany();
  }

  async findOne(id: string) {
    const nf = await prisma.notaFiscal.findUnique({
      where: { id },
    });

    if (!nf) {
      throw new HttpException(404, "Nota Fiscal não encontrada");
    }

    return nf;
  }
  async create(dto: CreateNotaFiscalDto) {
    try {
      return await prisma.notaFiscal.create({
        data: {
          ...dto,
        },
      });
    } catch (error) {
      console.log("error", error);

      throw new HttpException(400, "Erro ao criar Nota Fiscal");
    }
  }

  async emit(id: string) {
    const nf = await prisma.notaFiscal.findUnique({
      where: { id },
    });

    if (nf && nf.status === StatusNf.EMITIDA) {
      throw new HttpException(400, "Nota Fiscal já emitida");
    }

    if (!nf) {
      throw new HttpException(404, "Nota Fiscal não encontrada");
    }

    const api = createApiClient({
      baseURL: process.env.EMISSOR_API_URL!,
      token: process.env.EMISSOR_API_KEY!,
    });

    console.log("find NF", api);

    const response = await api.post("", nf);

    if (response.status !== 200) {
      const message =
        errorsHtppCode[response.status] || "Erro inesperado ao emitir NF";
      throw new HttpException(response.status, message);
    }

    const { numeroNF, dataEmissao } = response.data;

    return await prisma.notaFiscal.update({
      where: { id },
      data: {
        numeroNF,
        dataEmissao,
        status: StatusNf.EMITIDA,
      },
    });
  }
}
