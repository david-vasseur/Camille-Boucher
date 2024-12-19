/*
  Warnings:

  - Added the required column `soin` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Comment` ADD COLUMN `soin` INTEGER NOT NULL,
    MODIFY `message` VARCHAR(3600) NOT NULL;
