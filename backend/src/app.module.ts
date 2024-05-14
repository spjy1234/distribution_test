import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/dataSourceOptions';
import { UserModule } from './user/user.module';
import {ConfigModule} from "@nestjs/config";

const options: TypeOrmModuleOptions = dataSourceOptions;
options.autoLoadEntities = true;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      ignoreEnvFile: true,
    }),
    TypeOrmModule.forRoot(options),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
