import app from "../src/app";
import prisma from "../src/instances/prisma/prisma";
import { NFService } from "../src/modules/nf/nf.service";
import request from "supertest";

describe("NF Service", () => {
  const service = new NFService();

  beforeAll(async () => {
    await prisma.$connect();
    await prisma.notaFiscal.deleteMany();
  });

  afterAll(async () => {
    await prisma.notaFiscal.deleteMany();
    await prisma.$disconnect();
  });

  it("should return an empty list when there are no nf", async () => {
    const res = await request(app).get("/nf");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("should create and return a nf", async () => {
    const nota = {
      cnpj: "12345678000199",
      municipio: "São Paulo",
      estado: "SP",
      valor: 1,
      descricao: "Serviço de consultoria",
    };

    const createRes = await request(app).post("/nf").send(nota);
    expect(createRes.status).toBe(201);

    const getRes = await request(app).get("/nf");
    expect(getRes.status).toBe(200);
    expect(getRes.body.length).toBe(1);
    expect(getRes.body[0].cnpj).toBe("12345678000199");
  });

  it("should return 404 if nf is not found", async () => {
    const nonExistentId = "21312312312";

    const response = await request(app).get(`/nf/${nonExistentId}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Nota Fiscal não encontrada");
  });

  it("should return a specific nf", async () => {
    const created = await prisma.notaFiscal.create({
      data: {
        cnpj: "12345678000199",
        municipio: "São Paulo",
        estado: "SP",
        valor: 100,
        descricao: "Serviço de consultoria",
      },
    });

    const response = await request(app).get(`/nf/${created.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", created.id);
    expect(response.body).toHaveProperty("cnpj", "12345678000199");
  });
});
