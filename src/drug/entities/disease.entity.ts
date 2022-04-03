import { ApiProperty } from '@nestjs/swagger';

export class Disease {
  @ApiProperty()
  name: string;
}
