export interface IHouse {
  id?: string;
  address: string;
  wifiPassword?: string;
  ownerId: string;
  builtById: string;
  createdAt?: Date;
  updatedAt?: Date;
}
