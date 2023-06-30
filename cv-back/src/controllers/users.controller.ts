import { Request, Response } from "express";
import usersService from "../services/users.service";

const usersController = {
  login: async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      const token = await usersService.login(username, password);

      res.json({ token });
    } catch (e) {
      res.status(401).json({
        message: e.message,
      });
    }
  },
  register: async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      await usersService.create(username, password);
      res.json({ message: "Succesfully registered" });
    } catch (e) {
      res.status(403).json({
        message: "Forbidden. User already createdSuccesfully registered",
      });
    }
  },
};

export default usersController;
