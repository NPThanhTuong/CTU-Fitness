/*
  Warnings:

  - You are about to alter the column `status` on the `equipment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `equipment` MODIFY `status` BOOLEAN NOT NULL DEFAULT false;
