/*
  Warnings:

  - You are about to drop the column `images` on the `BusinessSiteTask` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BusinessSiteTask" DROP COLUMN "images";

-- CreateTable
CREATE TABLE "BusinessSiteDataTask" (
    "id" SERIAL NOT NULL,
    "website" TEXT NOT NULL,
    "texts" TEXT[],
    "images" TEXT[],
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessSiteDataTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BusinessSiteDataTask_website_key" ON "BusinessSiteDataTask"("website");
