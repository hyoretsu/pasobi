-- Update
UPDATE
	"Processor"
SET
	"memoryChannels" = 2
WHERE
	"memoryChannels" IS NULL;

-- AlterTable
ALTER TABLE
	"Processor"
ALTER COLUMN
	"memoryChannels"
SET
	NOT NULL,
ALTER COLUMN
	"memoryChannels"
SET
	DEFAULT 2;
