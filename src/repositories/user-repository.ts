import { prisma } from "@database/prisma-client";
import { IUpdatedUser, IUser } from "@models/user";

const userRepository = {
  get: async () => {
    return await prisma.user.findMany();
  },

  create: async (user: IUser) => {
    return await prisma.user.create({
      data: user,
    });
  },

  updateById: async (user: IUpdatedUser) => {
    return await prisma.user.update({
      data: user,
      where: {
        id: user.id,
      },
    });
  },

  deleteById: async (id: IUser["id"]) => {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  },
};

export { userRepository };
