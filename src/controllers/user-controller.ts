import { Request, Response } from "express";
import { UserRepository } from "@repositories/user-repository";

const userRepository = new UserRepository();

class UserController {
  async get(_req: Request, res: Response) {
    try {
      const allUsers = await userRepository.get();

      res.status(200).json(allUsers);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { firstName, lastName, age } = req.body;

      const newUser = await userRepository.create({ firstName, lastName, age });

      res.status(201).json(newUser);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  }

  async updateById(req: Request, res: Response) {
    try {
      const { newAge } = req.body;
      const { id } = req.params;

      const updatedUser = await userRepository.updateById({ age: newAge, id });

      res.status(200).json(updatedUser);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  }

  async deleteById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedUser = await userRepository.deleteById(id);

      res.status(200).json(deletedUser);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  }
}

export { UserController };
