/*
  Warnings:

  - You are about to drop the column `data` on the `ChatGptTask` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `ChatGptTask` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[domain]` on the table `ChatGptTask` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ChatGptTask_url_key";

-- AlterTable
ALTER TABLE "ChatGptTask" DROP COLUMN "data",
DROP COLUMN "url";

-- CreateIndex
CREATE UNIQUE INDEX "ChatGptTask_domain_key" ON "ChatGptTask"("domain");
