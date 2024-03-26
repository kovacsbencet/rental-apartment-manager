-- CreateTable
CREATE TABLE `Property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(191) NOT NULL DEFAULT 'Wien',
    `district` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `stairwell` INTEGER NOT NULL,
    `floor` INTEGER NOT NULL,
    `apartment` INTEGER NOT NULL,
    `status` ENUM('RENTED', 'NOT_RENTED') NOT NULL,
    `rent` INTEGER NOT NULL,
    `rentStart` DATETIME(3) NOT NULL,
    `rentEnd` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
