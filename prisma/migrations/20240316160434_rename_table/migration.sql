/*
  Warnings:

  - You are about to drop the `benefits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `benefits_on_membership_packages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `business_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `equipment_on_muscles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `equipment_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `equipments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exercise_on_equipments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exercises` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `facilities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `facilities_on_customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `membership_packages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `muscles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `positions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `register_forms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `repair` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `traning_session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `traning_session_on_exercises` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `benefits_on_membership_packages` DROP FOREIGN KEY `benefits_on_membership_packages_benefitId_fkey`;

-- DropForeignKey
ALTER TABLE `benefits_on_membership_packages` DROP FOREIGN KEY `benefits_on_membership_packages_membershipPackageId_fkey`;

-- DropForeignKey
ALTER TABLE `business` DROP FOREIGN KEY `business_businessTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `business` DROP FOREIGN KEY `business_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `business` DROP FOREIGN KEY `business_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `business` DROP FOREIGN KEY `business_positionId_fkey`;

-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_facilityId_fkey`;

-- DropForeignKey
ALTER TABLE `equipment_on_muscles` DROP FOREIGN KEY `equipment_on_muscles_equipmentId_fkey`;

-- DropForeignKey
ALTER TABLE `equipment_on_muscles` DROP FOREIGN KEY `equipment_on_muscles_muscleName_fkey`;

-- DropForeignKey
ALTER TABLE `equipments` DROP FOREIGN KEY `equipments_equipmentTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `equipments` DROP FOREIGN KEY `equipments_facilityId_fkey`;

-- DropForeignKey
ALTER TABLE `exercise_on_equipments` DROP FOREIGN KEY `exercise_on_equipments_equipmentId_fkey`;

-- DropForeignKey
ALTER TABLE `exercise_on_equipments` DROP FOREIGN KEY `exercise_on_equipments_exerciseId_fkey`;

-- DropForeignKey
ALTER TABLE `facilities_on_customers` DROP FOREIGN KEY `facilities_on_customers_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `facilities_on_customers` DROP FOREIGN KEY `facilities_on_customers_facilityId_fkey`;

-- DropForeignKey
ALTER TABLE `register_forms` DROP FOREIGN KEY `register_forms_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `register_forms` DROP FOREIGN KEY `register_forms_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `register_forms` DROP FOREIGN KEY `register_forms_membershipPackageId_fkey`;

-- DropForeignKey
ALTER TABLE `repair` DROP FOREIGN KEY `repair_equipmentId_fkey`;

-- DropForeignKey
ALTER TABLE `traning_session` DROP FOREIGN KEY `traning_session_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `traning_session_on_exercises` DROP FOREIGN KEY `traning_session_on_exercises_exerciseId_fkey`;

-- DropForeignKey
ALTER TABLE `traning_session_on_exercises` DROP FOREIGN KEY `traning_session_on_exercises_trainingSessionId_fkey`;

-- DropTable
DROP TABLE `benefits`;

-- DropTable
DROP TABLE `benefits_on_membership_packages`;

-- DropTable
DROP TABLE `business_type`;

-- DropTable
DROP TABLE `customers`;

-- DropTable
DROP TABLE `departments`;

-- DropTable
DROP TABLE `employees`;

-- DropTable
DROP TABLE `equipment_on_muscles`;

-- DropTable
DROP TABLE `equipment_type`;

-- DropTable
DROP TABLE `equipments`;

-- DropTable
DROP TABLE `exercise_on_equipments`;

-- DropTable
DROP TABLE `exercises`;

-- DropTable
DROP TABLE `facilities`;

-- DropTable
DROP TABLE `facilities_on_customers`;

-- DropTable
DROP TABLE `membership_packages`;

-- DropTable
DROP TABLE `muscles`;

-- DropTable
DROP TABLE `positions`;

-- DropTable
DROP TABLE `register_forms`;

-- DropTable
DROP TABLE `repair`;

-- DropTable
DROP TABLE `traning_session`;

-- DropTable
DROP TABLE `traning_session_on_exercises`;

-- CreateTable
CREATE TABLE `Position` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BusinessType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Benefit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(1024) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MembershipPackage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` TEXT NULL,
    `shelfLife` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BenefitOnMembershipPackage` (
    `benefitId` INTEGER NOT NULL,
    `membershipPackageId` INTEGER NOT NULL,

    PRIMARY KEY (`benefitId`, `membershipPackageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Facility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(50) NOT NULL,
    `area` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(50) NOT NULL,
    `dayOfBirdth` DATE NOT NULL,
    `cid` VARCHAR(12) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phoneNumber` VARCHAR(11) NOT NULL,
    `address` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacilityOnCustomer` (
    `customerId` INTEGER NOT NULL,
    `facilityId` INTEGER NOT NULL,

    PRIMARY KEY (`facilityId`, `customerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(50) NOT NULL,
    `dayOfBirdth` DATE NOT NULL,
    `cid` VARCHAR(12) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phoneNumber` VARCHAR(11) NOT NULL,
    `address` VARCHAR(50) NOT NULL,
    `socials` VARCHAR(256) NOT NULL,
    `facilityId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegisterForm` (
    `membershipPackageId` INTEGER NOT NULL,
    `customerId` INTEGER NOT NULL,
    `employeeId` INTEGER NOT NULL,
    `registerDate` DATE NOT NULL,
    `registerPrice` INTEGER NOT NULL,
    `registerExpiryDate` DATE NOT NULL,

    PRIMARY KEY (`registerDate`, `membershipPackageId`, `customerId`, `employeeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TraningSession` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(256) NOT NULL,
    `description` TEXT NOT NULL,
    `employeeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(64) NOT NULL,
    `description` TEXT NOT NULL,
    `rep` INTEGER NULL,
    `time` INTEGER NULL,
    `illutrations` VARCHAR(256) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TraningSessionOnExercise` (
    `trainingSessionId` INTEGER NOT NULL,
    `exerciseId` INTEGER NOT NULL,

    PRIMARY KEY (`trainingSessionId`, `exerciseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Muscle` (
    `name` VARCHAR(50) NOT NULL,
    `description` TEXT NOT NULL,
    `image` VARCHAR(256) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EquipmentType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `importDate` DATE NOT NULL,
    `manufacturingDate` DATE NOT NULL,
    `expiryDate` DATE NOT NULL,
    `price` INTEGER NOT NULL,
    `shelfLife` INTEGER NOT NULL,
    `origin` VARCHAR(50) NOT NULL,
    `distributor` VARCHAR(50) NOT NULL,
    `description` TEXT NULL,
    `status` VARCHAR(50) NOT NULL,
    `facilityId` INTEGER NOT NULL,
    `equipmentTypeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExerciseOnEquipment` (
    `exerciseId` INTEGER NOT NULL,
    `equipmentId` INTEGER NOT NULL,

    PRIMARY KEY (`exerciseId`, `equipmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EquipmentOnMuscle` (
    `equipmentId` INTEGER NOT NULL,
    `muscleName` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`equipmentId`, `muscleName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Correction` (
    `equipmentId` INTEGER NOT NULL,
    `correctionDate` DATE NOT NULL,
    `cost` INTEGER NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`equipmentId`, `correctionDate`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BenefitOnMembershipPackage` ADD CONSTRAINT `BenefitOnMembershipPackage_benefitId_fkey` FOREIGN KEY (`benefitId`) REFERENCES `Benefit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BenefitOnMembershipPackage` ADD CONSTRAINT `BenefitOnMembershipPackage_membershipPackageId_fkey` FOREIGN KEY (`membershipPackageId`) REFERENCES `MembershipPackage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacilityOnCustomer` ADD CONSTRAINT `FacilityOnCustomer_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacilityOnCustomer` ADD CONSTRAINT `FacilityOnCustomer_facilityId_fkey` FOREIGN KEY (`facilityId`) REFERENCES `Facility`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_facilityId_fkey` FOREIGN KEY (`facilityId`) REFERENCES `Facility`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegisterForm` ADD CONSTRAINT `RegisterForm_membershipPackageId_fkey` FOREIGN KEY (`membershipPackageId`) REFERENCES `MembershipPackage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegisterForm` ADD CONSTRAINT `RegisterForm_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegisterForm` ADD CONSTRAINT `RegisterForm_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_businessTypeId_fkey` FOREIGN KEY (`businessTypeId`) REFERENCES `BusinessType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TraningSession` ADD CONSTRAINT `TraningSession_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TraningSessionOnExercise` ADD CONSTRAINT `TraningSessionOnExercise_trainingSessionId_fkey` FOREIGN KEY (`trainingSessionId`) REFERENCES `TraningSession`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TraningSessionOnExercise` ADD CONSTRAINT `TraningSessionOnExercise_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_facilityId_fkey` FOREIGN KEY (`facilityId`) REFERENCES `Facility`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_equipmentTypeId_fkey` FOREIGN KEY (`equipmentTypeId`) REFERENCES `EquipmentType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExerciseOnEquipment` ADD CONSTRAINT `ExerciseOnEquipment_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExerciseOnEquipment` ADD CONSTRAINT `ExerciseOnEquipment_equipmentId_fkey` FOREIGN KEY (`equipmentId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipmentOnMuscle` ADD CONSTRAINT `EquipmentOnMuscle_equipmentId_fkey` FOREIGN KEY (`equipmentId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipmentOnMuscle` ADD CONSTRAINT `EquipmentOnMuscle_muscleName_fkey` FOREIGN KEY (`muscleName`) REFERENCES `Muscle`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Correction` ADD CONSTRAINT `Correction_equipmentId_fkey` FOREIGN KEY (`equipmentId`) REFERENCES `Equipment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
