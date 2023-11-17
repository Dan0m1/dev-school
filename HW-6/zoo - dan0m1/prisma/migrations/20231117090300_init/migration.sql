-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPERVISOR', 'GUARD', 'OVERWATCH', 'MANAGER');

-- CreateEnum
CREATE TYPE "AnimalFamily" AS ENUM ('WHITE_TIGER', 'SIBERIAN_TIGER', 'AFRICAN_LION', 'BLACK_LEOPARD', 'RETICULATED_GIRAFFE', 'HIMALAYAN_BEAR', 'FALLOW_DEAR', 'ALPACA', 'RACOON', 'GORILLA', 'CHIMPANZEE', 'MONKEY', 'MEERKAT');

-- CreateTable
CREATE TABLE "Sector" (
    "id" SERIAL NOT NULL,
    "supervisorId" INTEGER NOT NULL,
    "location" TEXT,

    CONSTRAINT "Sector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "job" "Role" NOT NULL DEFAULT 'SUPERVISOR',
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "salary" INTEGER NOT NULL DEFAULT 16000,
    "chiefId" INTEGER,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cage" (
    "id" SERIAL NOT NULL,
    "sectorId" INTEGER NOT NULL,
    "animalFamily" "AnimalFamily" NOT NULL,

    CONSTRAINT "Cage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cageId" INTEGER NOT NULL,
    "family" "AnimalFamily" NOT NULL,
    "lastTimeFed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitorsHistory" (
    "date" TEXT NOT NULL,
    "visitorAmount" INTEGER NOT NULL,
    "income" INTEGER,

    CONSTRAINT "VisitorsHistory_pkey" PRIMARY KEY ("date")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sector_supervisorId_key" ON "Sector"("supervisorId");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_contactEmail_key" ON "Staff"("contactEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Cage_id_animalFamily_key" ON "Cage"("id", "animalFamily");

-- AddForeignKey
ALTER TABLE "Sector" ADD CONSTRAINT "Sector_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_chiefId_fkey" FOREIGN KEY ("chiefId") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cage" ADD CONSTRAINT "Cage_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "Sector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_cageId_family_fkey" FOREIGN KEY ("cageId", "family") REFERENCES "Cage"("id", "animalFamily") ON DELETE RESTRICT ON UPDATE CASCADE;
