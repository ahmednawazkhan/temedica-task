import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DrugRepository {
  constructor(private readonly prismaService: PrismaService) {}
  getAllDrugs() {
    return this.prismaService.drug.findMany({
      include: {
        diseases: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
