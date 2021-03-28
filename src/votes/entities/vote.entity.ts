import { Entity, ManyToOne } from "typeorm";

import { BasicEntity } from "src/base.entity";
import { Round } from "src/rounds/entities/round.entity";
import { Card } from "src/cards/entities/card.entity";

@Entity()
export class Vote extends BasicEntity {
  @ManyToOne((type) => Round, (round) => round.votes)
  round: Round;

  @ManyToOne((type) => Card, (card) => card.votes)
  card: Card;
}
