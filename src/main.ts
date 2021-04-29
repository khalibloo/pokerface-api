import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  app.enableCors({ credentials: true, origin: true });
  const config = new DocumentBuilder()
    .setTitle("PokerFace API")
    .setDescription("API documentation for the PokerFace service")
    .setVersion("1.0")
    .addTag("Poker")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT || 8000, process.env.HOST || "0.0.0.0");
}
bootstrap();
