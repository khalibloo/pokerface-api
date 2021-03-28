import { OmitType } from "@nestjs/swagger";
import { Card } from "../entities/card.entity";

export class CreateCardDto extends OmitType(Card, [
  "room",
  "votes",
  "id",
  "createdAt",
  "deletedAt",
  "updatedAt",
]) {
  room: number;
}
