-- CreateTable
CREATE TABLE "Socket" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(10) NOT NULL,
    "launchDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Socket_pkey" PRIMARY KEY ("id")
);
