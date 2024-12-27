import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS-Konfiguration
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Swagger-Konfiguration
  const config = new DocumentBuilder()
    .setTitle('API-Dokumentation') // Titel der API
    .setDescription('Die API-Dokumentation für dein Projekt') // Beschreibung
    .setVersion('1.0') // Version der API
    .addBearerAuth() // Optional: Bearer-Token für Authentifizierung
    .build();

  // Swagger-Dokument erstellen
  const document = SwaggerModule.createDocument(app, config);

  // Swagger-Dokumentation unter /api verfügbar machen
  SwaggerModule.setup('api', app, document);

  // Server starten
  await app.listen(3000);
}
bootstrap();
