ALTER TABLE "Socket" RENAME COLUMN "manufacturerId" TO "companyId";
ALTER TABLE "Socket" RENAME CONSTRAINT "Socket_manufacturerId_fkey" TO "Socket_companyId_fkey";
