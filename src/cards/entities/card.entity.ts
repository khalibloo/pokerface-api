import { Entity, Column, ManyToOne } from "typeorm";

import { BasicEntity } from "src/base.entity";
import { Room } from "src/rooms/entities/room.entity";
import { Vote } from "src/votes/entities/vote.entity";

@Entity()
export class Card extends BasicEntity {
  @Column({ length: 3 })
  value: string;

  @ManyToOne((type) => Room, (room) => room.cards)
  room: Room;

  @ManyToOne((type) => Vote, (vote) => vote.card)
  votes: Vote[];
}
