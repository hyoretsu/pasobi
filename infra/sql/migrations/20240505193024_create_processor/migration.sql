-- CreateTable
CREATE TABLE "Processor" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "model" VARCHAR(10) NOT NULL,
    "brand" VARCHAR(7) NOT NULL,
    "socketId" UUID NOT NULL,
    "l1Cache" SMALLINT NOT NULL,
    "l2Cache" SMALLINT NOT NULL,
    "l3Cache" SMALLINT NOT NULL,
    "tdp" SMALLINT NOT NULL,
    "releaseDate" DATE NOT NULL,
    "msrp" SMALLINT NOT NULL,
    "manufacturerId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Processor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessorCoreInfo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" CHAR(1),
    "coreCount" SMALLINT NOT NULL,
    "threadCount" SMALLINT NOT NULL,
    "baseClock" DECIMAL(3,1) NOT NULL,
    "boostClock" DECIMAL(3,1) NOT NULL,
    "processorId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProcessorCoreInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Processor" ADD CONSTRAINT "Processor_socketId_fkey" FOREIGN KEY ("socketId") REFERENCES "Socket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Processor" ADD CONSTRAINT "Processor_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessorCoreInfo" ADD CONSTRAINT "ProcessorCoreInfo_processorId_fkey" FOREIGN KEY ("processorId") REFERENCES "Processor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
