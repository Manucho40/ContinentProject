import { Module } from '@nestjs/common';
import { ContinentController } from './continent.controller';
import { ContinentService } from './continent.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContinentSchema } from './dto/Create-continent.dto';

@Module({
    imports: [MongooseModule.forFeature([{name: "Continent", schema: ContinentSchema}])
],
  controllers: [ContinentController],
  providers: [ContinentService]
})
export class ContinentModule {}
