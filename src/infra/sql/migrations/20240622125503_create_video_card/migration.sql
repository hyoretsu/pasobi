CREATE EXTENSION pg_jsonschema;

-- CreateTable
CREATE TABLE "VideoCard" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "modelId" UUID NOT NULL,
    "manufacturerId" UUID,
    "ports" VARCHAR(11)[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoCardArchitecture" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(12) NOT NULL,
    "fabricationProcess" VARCHAR(12)[],
    "features" VARCHAR[],
    "launchDate" DATE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoCardArchitecture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoCardClock" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" VARCHAR(6),
    "speed" SMALLINT NOT NULL,
    "modelId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoCardClock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoCardCore" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" VARCHAR(28) NOT NULL,
    "amount" SMALLINT NOT NULL,
    "modelId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoCardCore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoCardFlops" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" VARCHAR(11) NOT NULL DEFAULT 'Single',
    "amount" DECIMAL(15,0)[],
    "modelId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoCardFlops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoCardMemory" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "size" DECIMAL(11,0) NOT NULL,
    "bandwidth" INTEGER NOT NULL,
    "busType" VARCHAR(6) NOT NULL,
    "busWidth" SMALLINT NOT NULL,
    "modelId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoCardMemory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoCardModel" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(25) NOT NULL,
    "series" VARCHAR(14) NOT NULL,
    "codename" VARCHAR(10),
    "architectureId" UUID NOT NULL,
    "busInterface" VARCHAR(16),
    "transistors" DECIMAL(12,0),
    "dieSize" SMALLINT,
    "computeUnits" SMALLINT,
    "multiGpuSupport" BOOLEAN NOT NULL DEFAULT false,
    "tdp" SMALLINT,
    "launchDate" DATE,
    "msrp" JSONB,
    "processorId" UUID,
    "companyId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoCardModel_pkey" PRIMARY KEY ("id"),
	CONSTRAINT CHK_msrp CHECK (
		jsonb_matches_schema(
			'{
				"type": "object",
				"properties": {
					"amount": {
						"type": "number"
					},
					"currency": {
						"type": "string"
					}
				},
				"required": ["amount", "currency"],
				"additionalProperties": false
			}',
			"msrp"
		)
	)
);

-- CreateIndex
CREATE UNIQUE INDEX "VideoCard_modelId_key" ON "VideoCard"("modelId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoCardMemory_modelId_key" ON "VideoCardMemory"("modelId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoCardModel_processorId_key" ON "VideoCardModel"("processorId");

-- AddForeignKey
ALTER TABLE "VideoCard" ADD CONSTRAINT "VideoCard_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "VideoCardModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCard" ADD CONSTRAINT "VideoCard_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCardClock" ADD CONSTRAINT "VideoCardClock_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "VideoCardModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCardCore" ADD CONSTRAINT "VideoCardCore_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "VideoCardModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCardFlops" ADD CONSTRAINT "VideoCardFlops_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "VideoCardModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCardMemory" ADD CONSTRAINT "VideoCardMemory_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "VideoCardModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCardModel" ADD CONSTRAINT "VideoCardModel_architectureId_fkey" FOREIGN KEY ("architectureId") REFERENCES "VideoCardArchitecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCardModel" ADD CONSTRAINT "VideoCardModel_processorId_fkey" FOREIGN KEY ("processorId") REFERENCES "Processor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCardModel" ADD CONSTRAINT "VideoCardModel_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
