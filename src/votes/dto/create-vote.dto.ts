import { OmitType } from "@nestjs/swagger";
import { Vote } from "../entities/vote.entity";

export class CreateVoteDto extends OmitType(Vote, [
  "card",
  "round",
  "id",
  "createdAt",
  "updatedAt",
  "deletedAt",
]) {
  card: number;
  round: number;
}
