import { Injectable } from '@nestjs/common';
import { DrugRepository } from './drug.repository';

@Injectable()
export class DrugService {
  constructor(private readonly drugRepository: DrugRepository) {}
  getAllDrugs() {
    return this.drugRepository.getAllDrugs();
  }
}
