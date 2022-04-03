-- CreateTable
CREATE TABLE "Drug" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "released" DATE NOT NULL,

    CONSTRAINT "Drug_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disease" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DiseaseToDrug" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Disease_name_key" ON "Disease"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_DiseaseToDrug_AB_unique" ON "_DiseaseToDrug"("A", "B");

-- CreateIndex
CREATE INDEX "_DiseaseToDrug_B_index" ON "_DiseaseToDrug"("B");

-- AddForeignKey
ALTER TABLE "_DiseaseToDrug" ADD FOREIGN KEY ("A") REFERENCES "Disease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiseaseToDrug" ADD FOREIGN KEY ("B") REFERENCES "Drug"("id") ON DELETE CASCADE ON UPDATE CASCADE;
