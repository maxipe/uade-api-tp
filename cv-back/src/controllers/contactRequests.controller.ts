import { Request, Response } from "express";
import contactRequestsService from "../services/contactRequests.service";

interface SaveInterface {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactRequestsController = {
  get: async (_req: Request, res: Response): Promise<void> => {
    res.send(await contactRequestsService.getAll());
  },
  save: async (req: Request, res: Response) => {
    const { name, email, phone, message } = req.body as SaveInterface;
    await contactRequestsService.create(name, email, phone, message);
    res.status(201).send({ message: "Contact request created" });
  },
};

export default contactRequestsController;
