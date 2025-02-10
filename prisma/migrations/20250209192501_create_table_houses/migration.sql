-- CreateTable
CREATE TABLE `houses` (
    `id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `wifi_password` VARCHAR(191) NULL,
    `owner_id` VARCHAR(191) NOT NULL,
    `builtById` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `houses_address_key`(`address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `houses` ADD CONSTRAINT `houses_owner_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `houses` ADD CONSTRAINT `houses_builtById_fkey` FOREIGN KEY (`builtById`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
