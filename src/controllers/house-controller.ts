import { Request, Response } from "express";
import { HouseRepository } from "@repositories/house-repository";

const houseRepository = new HouseRepository();

class HouseController {
  async create(req: Request, res: Response) {
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
  }

  async get(_req: Request, res: Response) {
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
  }

  async getById(req: Request, res: Response) {
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
  }

  async getByAddress(req: Request, res: Response) {
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
  }

  async createMany(req: Request, res: Response) {
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
  }

  async withFilters(_req: Request, res: Response) {
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
  }
}

export { HouseController };
