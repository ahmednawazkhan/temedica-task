import { Module } from '@nestjs/common';
import { DrugController } from './drug.controller';
import { DrugRepository } from './drug.repository';
import { DrugService } from './drug.service';

@Module({
  controllers: [DrugController],
  providers: [DrugService, DrugRepository],
})
export class DrugModule {}
