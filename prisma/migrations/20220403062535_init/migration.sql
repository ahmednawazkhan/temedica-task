-- CreateTable
CREATE TABLE "Drug" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "released" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Drug_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disease" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiseasesOnDrugs" (
    "diseaseId" TEXT NOT NULL,
    "drugId" TEXT NOT NULL,

    CONSTRAINT "DiseasesOnDrugs_pkey" PRIMARY KEY ("diseaseId","drugId")
);

-- AddForeignKey
ALTER TABLE "DiseasesOnDrugs" ADD CONSTRAINT "DiseasesOnDrugs_drugId_fkey" FOREIGN KEY ("drugId") REFERENCES "Drug"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiseasesOnDrugs" ADD CONSTRAINT "DiseasesOnDrugs_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "Disease"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
