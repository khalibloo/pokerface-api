import { OmitType } from "@nestjs/swagger";
import { Round } from "../entities/round.entity";

export class CreateRoundDto extends OmitType(Round, [
  "room",
  "votes",
  "isActive",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
]) {
  room: number;
}
