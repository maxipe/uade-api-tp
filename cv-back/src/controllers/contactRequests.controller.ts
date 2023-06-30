import { Request, Response } from "express";
import contactRequestsService from "../services/contactRequests.service";

const contactRequestsController = {
  get: async (req: Request, res: Response) => {
    res.send(await contactRequestsService.getAll());
  },
  save: (req: Request, res: Response) => {
    const { name, email, phone, message } = req.body;
    contactRequestsService.create(name, email, phone, message);
    res.status(201).send({ message: "Contact request created" });
  },
};

export default contactRequestsController;
