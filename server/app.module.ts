import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { S3Service } from './s3.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CsvModule } from './csv/csv.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // load .env file
    CsvModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.RDS_HOSTNAME || process.env.POSTGRES_HOST || 'localhost',
      port: +process.env.RDS_PORT || 5432,
      username: process.env.RDS_USERNAME || process.env.POSTGRES_USER || 'postgres',
      password: process.env.RDS_PASSWORD || process.env.POSTGRES_PASSWORD || 'password',
      database: process.env.RDS_DB_NAME || process.env.POSTGRES_DB || 'bitclout',
      autoLoadEntities: true,
      synchronize: true,
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : false,
    }),
    TypeOrmModule.forFeature([
      ProfileEntity,
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [ProfileService, S3Service],
})
export class AppModule {}
