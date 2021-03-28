import { OmitType, PartialType } from "@nestjs/swagger";
import { CreateVoteDto } from "./create-vote.dto";

export class UpdateVoteDto extends OmitType(PartialType(CreateVoteDto), [
  "round",
]) {}
