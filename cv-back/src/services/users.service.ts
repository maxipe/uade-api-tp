import bcrypt from "bcrypt";
import Users from "../models/Users";
import jwt from "jsonwebtoken";

const saltRounds = 10;

const usersService = {
  create: async (username: string, password: string) => {
    const user = await Users.findOne();

    if (user) {
      throw new Error("User already registered");
    }

    const hash = await bcrypt.hash(password, saltRounds);

    await Users.create({
      username,
      password: hash,
      date: Date.now(),
    });
  },
  login: async (username: string, password: string) => {
    const user = await Users.findOne({
      username,
    }).exec();

    if (!user) {
      throw new Error("Unauthorized. Invalid user or password");
    }

    const validLogin =
      user.username?.toLocaleLowerCase() === username.toLocaleLowerCase() &&
      (await bcrypt.compare(password, user.password ?? ""));

    if (!validLogin) {
      throw new Error("Unauthorized. Invalid user or password");
    }

    return jwt.sign({ username }, process.env.JWT_SECRET ?? "", {
      expiresIn: "1d",
    });
  },
};

export default usersService;
