import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  exports: [AuthService],
  imports: [PassportModule.register({ defaultStrategy: "jwt" })],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
