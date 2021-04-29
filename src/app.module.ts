import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RoomsModule } from "./rooms/rooms.module";
import { Room } from "./rooms/entities/room.entity";
import { CardsModule } from "./cards/cards.module";
import { RoundsModule } from "./rounds/rounds.module";
import { VotesModule } from "./votes/votes.module";
import { Round } from "./rounds/entities/round.entity";
import { Card } from "./cards/entities/card.entity";
import { Vote } from "./votes/entities/vote.entity";
import { AuthModule } from "./auth/auth.module";
import { parse } from "pg-connection-string";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: parse(process.env.DATABASE_URL).host,
      port: parseInt(parse(process.env.DATABASE_URL).port, 10),
      username: parse(process.env.DATABASE_URL).user,
      password: parse(process.env.DATABASE_URL).password,
      database: parse(process.env.DATABASE_URL).database,
      entities: [Room, Round, Card, Vote],
      // synchronize: true,
    }),
    RoomsModule,
    CardsModule,
    RoundsModule,
    VotesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
