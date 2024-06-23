/*
  Warnings:

  - Made the column `litography` on table `Processor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `maxMemory` on table `Processor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `memoryChannels` on table `Processor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pcieVersion` on table `Processor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Processor" ALTER COLUMN "litography" SET NOT NULL,
ALTER COLUMN "maxMemory" SET NOT NULL,
ALTER COLUMN "memoryChannels" SET NOT NULL,
ALTER COLUMN "pcieVersion" SET NOT NULL,
ALTER COLUMN "pcieVersion" SET DEFAULT '4.0';
