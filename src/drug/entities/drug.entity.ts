import { ApiProperty } from '@nestjs/swagger';
import { Disease } from './disease.entity';

export class Drug {
  @ApiProperty({ example: 'cksap55v40000mssb41hik5dz' })
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  released: Date;

  @ApiProperty({ isArray: true, type: Disease })
  diseases: Disease[];
}
