-- AlterTable
ALTER TABLE
	"Processor"
ALTER COLUMN
	"maxMemory" DROP NOT NULL,
ALTER COLUMN
	"memoryChannels" DROP NOT NULL;
