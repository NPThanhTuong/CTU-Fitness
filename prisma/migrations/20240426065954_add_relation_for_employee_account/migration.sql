/*
  Warnings:

  - Added the required column `employeeId` to the `employeeaccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employeeaccount` ADD COLUMN `employeeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `employeeaccount` ADD CONSTRAINT `employeeaccount_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
