/*
  Warnings:

  - Made the column `manufacturerId` on table `Socket` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Socket" DROP CONSTRAINT "Socket_manufacturerId_fkey";

-- AlterTable
ALTER TABLE "Socket" ALTER COLUMN "manufacturerId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Socket" ADD CONSTRAINT "Socket_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
