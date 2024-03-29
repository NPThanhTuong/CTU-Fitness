/*
  Warnings:

  - Added the required column `coverImage` to the `TraningSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` ADD COLUMN `avatar` VARCHAR(256) NOT NULL DEFAULT 'no-avater.jpg';

-- AlterTable
ALTER TABLE `traningsession` ADD COLUMN `coverImage` VARCHAR(256) NOT NULL;

-- CreateTable
CREATE TABLE `EquipmentImage` (
    `pathName` VARCHAR(256) NOT NULL,
    `equipmentId` INTEGER NOT NULL,

    PRIMARY KEY (`pathName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EquipmentImage` ADD CONSTRAINT `EquipmentImage_equipmentId_fkey` FOREIGN KEY (`equipmentId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
