import "reflect-metadata";
import { DataSource } from "typeorm";

import { BoardEntity } from "./entity/boardEntity";
import { CommentEntity } from "./entity/commentEntity";
import { PinEntity } from "./entity/pinEntity";
import { UserEntity } from "./entity/userEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.DB_PASSWORD),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [UserEntity, CommentEntity, BoardEntity, PinEntity],
  migrations: [],
  subscribers: [],
});
