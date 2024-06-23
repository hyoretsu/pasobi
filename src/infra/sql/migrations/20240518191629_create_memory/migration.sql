-- CreateTable
CREATE TABLE "Memory" (
	"id" UUID NOT NULL DEFAULT gen_random_uuid(),
	"capacity" SMALLINT NOT NULL,
	"generation" VARCHAR(4) NOT NULL,
	"type" VARCHAR(6) NOT NULL,
	"manufacturerId" UUID NOT NULL,
	"createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "Memory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemoryInfo" (
	"id" UUID NOT NULL DEFAULT gen_random_uuid(),
	"type" VARCHAR(13) NOT NULL,
	"clock" SMALLINT NOT NULL,
	"tcl" SMALLINT,
	"trcd" SMALLINT,
	"trp" SMALLINT,
	"tras" SMALLINT,
	"voltage" DECIMAL(5, 4),
	"memoryId" UUID NOT NULL,
	"createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "MemoryInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE
	"Memory"
ADD
	CONSTRAINT "Memory_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON
DELETE
	RESTRICT ON
UPDATE
	CASCADE;

-- AddForeignKey
ALTER TABLE
	"MemoryInfo"
ADD
	CONSTRAINT "MemoryInfo_memoryId_fkey" FOREIGN KEY ("memoryId") REFERENCES "Memory"("id") ON
DELETE
	RESTRICT ON
UPDATE
	CASCADE;
