import { Request, Response } from "express";
import { houseRepository } from "@repositories/house-repository";

const houseController = {
  create: async (req: Request, res: Response) => {
    try {
      const { address, wifiPassword, ownerId, builtById } = req.body;

      const newHouse = await houseRepository.create({
        address,
        wifiPassword,
        ownerId,
        builtById,
      });

      res.status(201).json(newHouse);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  },

  get: async (_req: Request, res: Response) => {
    try {
      const allHouses = await houseRepository.get();

      res.status(200).json(allHouses);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const house = await houseRepository.getById(id);

      res.status(200).json(house);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  },

  getByAddress: async (req: Request, res: Response) => {
    try {
      const { address } = req.body;

      const house = await houseRepository.getByAddress(address);

      res.status(200).json(house);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  },

  createMany: async (req: Request, res: Response) => {
    try {
      const newHouse = await houseRepository.createMany(req.body);

      res.status(201).json(newHouse);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  },

  withFilters: async (_req: Request, res: Response) => {
    try {
      const allHouses = await houseRepository.withFilters();

      res.status(200).json(allHouses);
    } catch (error) {
      const _err = error as Error;
      res.status(400).json({
        message: _err.message,
        error: _err.stack,
      });
      console.error(_err.message);
    }
  },
};

export { houseController };
