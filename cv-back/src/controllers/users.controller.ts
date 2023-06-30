import { Request, Response } from "express";
import usersService from "../services/users.service";

interface AuthInterface {
  username: string;
  password: string;
}

const usersController = {
  login: async (req: Request, res: Response) => {
    const { username, password } = req.body as AuthInterface;

    try {
      const token = await usersService.login(username, password);

      res.json({ token });
    } catch (e) {
      const message: string = e instanceof Error ? e.message : "Error";
      res.status(401).json({
        message: message,
      });
    }
  },
  register: async (req: Request, res: Response) => {
    const { username, password } = req.body as AuthInterface;

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
