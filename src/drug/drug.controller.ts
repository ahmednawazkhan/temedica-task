import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DrugService } from './drug.service';
import { Drug } from './entities/drug.entity';

@ApiTags('Medication WIKI Api')
@Controller()
export class DrugController {
  constructor(private readonly drugService: DrugService) {}

  @ApiOkResponse({
    type: Drug,
    isArray: true,
    description: 'return all durgs with relevant diseases',
  })
  @Get('/drugs')
  getAllDrugs() {
    return this.drugService.getAllDrugs();
  }
}
