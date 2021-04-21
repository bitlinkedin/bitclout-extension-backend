import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { S3Service } from './s3.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CsvModule } from './csv/csv.module';
import { AuthService } from './auth.service';
import { JWTService } from './jwt.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { LocalStrategy } from './passport/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(), // load .env file
    CsvModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: process.env.TOKEN_JWT_SECRET_KEY || 'bitclout',
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:
        process.env.RDS_HOSTNAME || process.env.POSTGRES_HOST || 'localhost',
      port: +process.env.RDS_PORT || 5432,
      username:
        process.env.RDS_USERNAME || process.env.POSTGRES_USER || 'postgres',
      password:
        process.env.RDS_PASSWORD || process.env.POSTGRES_PASSWORD || 'password',
      database:
        process.env.RDS_DB_NAME || process.env.POSTGRES_DB || 'bitclout',
      autoLoadEntities: true,
      synchronize: true,
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : false,
    }),
    TypeOrmModule.forFeature([ProfileEntity, UserEntity]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [
    JWTService,
    ProfileService,
    UserService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AppModule {}
