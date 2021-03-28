import { OmitType, PartialType } from "@nestjs/swagger";
import { CreateRoundDto } from "./create-round.dto";

export class UpdateRoundDto extends OmitType(PartialType(CreateRoundDto), [
  "room",
]) {
  isActive: boolean;
}
