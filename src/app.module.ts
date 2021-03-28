import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { User } from "./users/entities/user.entity";
import { UsersModule } from "./users/users.module";
import { RoomsModule } from "./rooms/rooms.module";
import { Room } from "./rooms/entities/room.entity";
import { CardsModule } from "./cards/cards.module";
import { RoundsModule } from "./rounds/rounds.module";
import { VotesModule } from "./votes/votes.module";
import { Round } from "./rounds/entities/round.entity";
import { Card } from "./cards/entities/card.entity";
import { Vote } from "./votes/entities/vote.entity";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "meowmeow",
      database: "pokerface",
      entities: [User, Room, Round, Card, Vote],
      synchronize: true,
    }),
    UsersModule,
    RoomsModule,
    CardsModule,
    RoundsModule,
    VotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
