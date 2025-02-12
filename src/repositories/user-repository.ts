import { prisma } from "@database/prisma-client";
import { IUpdatedUser, IUser } from "@models/user";

class UserRepository {
  async get() {
    return await prisma.user.findMany();
  }

  async create(user: IUser) {
    return await prisma.user.create({
      data: user,
    });
  }

  async updateById(user: IUpdatedUser) {
    return await prisma.user.update({
      data: user,
      where: {
        id: user.id,
      },
    });
  }

  async deleteById(id: IUser["id"]) {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

export { UserRepository };
