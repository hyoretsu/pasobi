-- CreateTable
CREATE TABLE "Mouse" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "model" VARCHAR(10) NOT NULL,
    "sensor" VARCHAR(8),
    "maxDpi" SMALLINT NOT NULL,
    "dpiSteps" SMALLINT[8],
	CONSTRAINT "dpiSteps_val" CHECK (
		array_length("dpiSteps", 1) <= 8
	),
    "variableDpi" BOOLEAN NOT NULL DEFAULT false,
    "ips" SMALLINT,
    "buttons" SMALLINT,
    "weight" SMALLINT,
    "programmable" BOOLEAN NOT NULL DEFAULT false,
    "acceleration" SMALLINT,
    "wireless" BOOLEAN NOT NULL DEFAULT false,
    "wirelessType" VARCHAR(9),
    "polling" SMALLINT[6] DEFAULT ARRAY[125]::SMALLINT[],
	CONSTRAINT "polling_val" CHECK (
		array_length("polling", 1) <= 6
	),
    "switch" VARCHAR(20),
    "batteryCapacity" SMALLINT,
    "batteryLife" SMALLINT[2],
	CONSTRAINT "batteryLife_val" CHECK (
		array_length("batteryLife", 1) <= 2
	),
    "chargingTime" SMALLINT,
    "chargingPort" VARCHAR(9),
	"wirelessCharging" VARCHAR(38),
    "dimensions" DECIMAL(5,2)[3],
	CONSTRAINT "dimensions_val" CHECK (
		array_length("dimensions", 1) = 3
	),
    "manufacturerId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mouse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mouse" ADD CONSTRAINT "Mouse_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
