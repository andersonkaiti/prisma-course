import { prisma } from "@database/prisma-client";
import { IHouse } from "@models/house";

class HouseRepository {
  async create(house: IHouse) {
    return await prisma.house.create({
      data: house,
    });
  }

  async get() {
    return await prisma.house.findMany({
      include: { owner: true, builtBy: true },
    });
  }

  async getById(id: IHouse["id"]) {
    return await prisma.house.findUnique({
      where: { id },
    });
  }

  async getByAddress(address: IHouse["id"]) {
    return await prisma.house.findUnique({
      where: { address },
      include: {
        owner: true,
        builtBy: true,
      },
    });
  }

  async createMany(houses: IHouse[]) {
    return await prisma.house.createMany({
      data: houses,
    });
  }

  async withFilters() {
    return await prisma.house.findMany({
      where: {
        wifiPassword: {
          not: null,
        },
        owner: {
          age: {
            gte: 22,
          },
        },
      },
      orderBy: {
        owner: {
          firstName: "desc",
        },
      },
      include: {
        owner: true,
        builtBy: true,
      },
    });
  }
}

export { HouseRepository };
