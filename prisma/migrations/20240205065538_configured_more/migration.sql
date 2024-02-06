/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    MODIFY `imageUrl` VARCHAR(191) NULL,
    MODIFY `videoUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Post_slug_key` ON `Post`(`slug`);
