import { Request, Response } from "express";
import { NFService } from "./nf.service";
import { HttpException } from "../../errors/HttpException";

const service = new NFService();

export class NFController {
  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const notas = await service.findAll();
      res.status(200).json(notas);
    } catch (error) {
      console.log("error", error);
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const nf = await service.findOne(id);
      res.status(200).json(nf);
    } catch (error) {
      if (error instanceof HttpException) {
        res.status(error.status).json({ message: error.message });
      }
    }
  }
  async create(req: Request, res: Response): Promise<void> {
    try {
      console.log("req.body", req.body);

      const data = req.body;

      const created = await service.create(data);

      res.status(201).json(created);
    } catch (error) {
      if (error instanceof HttpException) {
        res.status(error.status).json({ message: error.message });
      }
    }
  }

  async emit(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const nf = await service.emit(id);

      res.status(200).json(nf);
    } catch (error) {
      if (error instanceof HttpException) {
        res.status(error.status).json({ message: error.message });
      }
    }
  }
}
