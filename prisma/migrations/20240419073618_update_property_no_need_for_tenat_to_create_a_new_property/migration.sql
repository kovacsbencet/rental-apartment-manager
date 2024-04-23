-- DropForeignKey
ALTER TABLE `Property` DROP FOREIGN KEY `Property_tenantID_fkey`;

-- AlterTable
ALTER TABLE `Property` MODIFY `tenantID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_tenantID_fkey` FOREIGN KEY (`tenantID`) REFERENCES `Tenant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
