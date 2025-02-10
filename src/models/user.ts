export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUpdatedUser extends Pick<IUser, "age" | "id"> {}
