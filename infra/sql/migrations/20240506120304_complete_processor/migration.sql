-- AlterTable
ALTER TABLE "Processor" ADD COLUMN     "architecture" VARCHAR(10),
ADD COLUMN     "codename" VARCHAR(15),
ADD COLUMN     "litography" VARCHAR(15),
ADD COLUMN     "maxMemory" SMALLINT,
ADD COLUMN     "memoryChannels" SMALLINT,
ADD COLUMN     "memorySpeed" SMALLINT[2][2],
ADD CONSTRAINT "memorySpeed_val" CHECK (
	array_length("memorySpeed", 1) <= 2 AND
	array_length("memorySpeed", 2) <= 2
),
ADD COLUMN     "pcieLanes" SMALLINT[2],
ADD CONSTRAINT "pcieLanes_val" CHECK (
	array_length("pcieLanes", 1) <= 2
),
ADD COLUMN     "pcieVersion" VARCHAR(4),
ALTER COLUMN "l1Cache" DROP NOT NULL,
ALTER COLUMN "l2Cache" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ProcessorUsbInfo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" VARCHAR(15) NOT NULL,
    "amount" SMALLINT NOT NULL,
    "processorId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProcessorUsbInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProcessorUsbInfo" ADD CONSTRAINT "ProcessorUsbInfo_processorId_fkey" FOREIGN KEY ("processorId") REFERENCES "Processor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
