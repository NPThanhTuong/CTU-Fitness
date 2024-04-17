/*
  Warnings:

  - You are about to alter the column `phoneNumber` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(11)` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `phoneNumber` VARCHAR(10) NOT NULL;
