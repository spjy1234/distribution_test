import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/dataSourceOptions';
import { UserModule } from './user/user.module';

const options: TypeOrmModuleOptions = dataSourceOptions;
options.autoLoadEntities = true;

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
