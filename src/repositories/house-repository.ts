import { prisma } from "@database/prisma-client";
import { IHouse } from "@models/house";

const houseRepository = {
  create: async (house: IHouse) => {
    return await prisma.house.create({
      data: house,
    });
  },

  get: async () => {
    return await prisma.house.findMany({
      include: { owner: true, builtBy: true },
    });
  },

  getById: async (id: IHouse["id"]) => {
    return await prisma.house.findUnique({
      where: { id },
    });
  },

  getByAddress: async (address: IHouse["id"]) => {
    return await prisma.house.findUnique({
      where: { address },
      include: {
        owner: true,
        builtBy: true,
      },
    });
  },

  createMany: async (houses: IHouse[]) => {
    return await prisma.house.createMany({
      data: houses,
    });
  },

  withFilters: async () => {
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
  },
};

export { houseRepository };
