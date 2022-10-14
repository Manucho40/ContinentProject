import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContinentModule } from './continent/continent.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [ContinentModule, MongooseModule.forRoot("mongodb+srv://KaeDev:XyeVg7rJC37izFSp@tchoumtestcluster.2kmvexk.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
