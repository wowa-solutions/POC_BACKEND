import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Swagger-Konfiguration
  const config = new DocumentBuilder()
    .setTitle('WOWA Api-Dokumentation') // Titel der API
    .setDescription('Hier werden die einzelnen Endpunkte aufgezeigt.') // Beschreibung
    .setVersion('1.0') // Version der API
    .addBearerAuth() // Optional: Bearer-Token für Authentifizierung
    .build();

  // Swagger-Dokument erstellen
  const document = SwaggerModule.createDocument(app, config);

  // Swagger-Dokumentation unter /api verfügbar machen
  SwaggerModule.setup('api', app, document);

  // Stelle sicher, dass der Port von der Umgebungsvariable PORT kommt, wenn du auf Heroku bist
  const port = process.env.PORT || 4000; // Falls PORT nicht gesetzt ist, standardmäßig 3000 verwenden

  // Server starten
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
