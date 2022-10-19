import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContinentModule } from './continent/continent.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';



@Module({
  imports: [
    ContinentModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'), // Loaded from .ENV
      })
    }),
    ConfigModule.forRoot({
      isGlobal: true
    })
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
