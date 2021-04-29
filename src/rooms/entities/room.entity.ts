import { Entity, Column, OneToMany } from "typeorm";

import { BasicEntity } from "src/base.entity";
import { Round } from "src/rounds/entities/round.entity";
import { Card } from "src/cards/entities/card.entity";

@Entity()
export class Room extends BasicEntity {
  @Column({ unique: true, length: 50 })
  name: string;

  @Column({ select: false })
  password: string;

  @Column()
  isPublished: boolean;

  @Column({ length: 50 })
  owner: string;

  @OneToMany((type) => Round, (round) => round.room)
  rounds: Round[];

  @OneToMany((type) => Card, (card) => card.room)
  cards: Card[];
}
