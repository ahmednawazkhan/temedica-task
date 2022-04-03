import { PrismaClient } from '@prisma/client';
import * as data from './seeder/dataset.json';

const prisma = new PrismaClient();

async function main() {
  await prisma.drug.deleteMany();
  await prisma.disease.deleteMany();
  console.log('Seeding...');

  for (const drug of data.drugs) {
    await prisma.drug.create({
      data: {
        id: drug.id,
        name: drug.name,
        description: drug.description,
        released: new Date(drug.released),
        diseases: {
          connectOrCreate: drug.diseases.map((diseaseName: string) => {
            return {
              where: { name: diseaseName },
              create: { name: diseaseName },
            };
          }),
        },
      },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
