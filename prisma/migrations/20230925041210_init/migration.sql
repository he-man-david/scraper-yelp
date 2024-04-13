-- CreateTable
CREATE TABLE "YelpListPageTask" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "page" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "links" TEXT[],

    CONSTRAINT "YelpListPageTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YelpProfilePageTask" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "hours" JSONB NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YelpProfilePageTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoogleLatLongTask" (
    "id" SERIAL NOT NULL,
    "businessName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GoogleLatLongTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessSiteTask" (
    "id" SERIAL NOT NULL,
    "website" TEXT NOT NULL,
    "links" TEXT[],
    "images" TEXT[],
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessSiteTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatGptTask" (
    "id" SERIAL NOT NULL,
    "domain" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "result" JSONB NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatGptTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YelpListPageTask_url_key" ON "YelpListPageTask"("url");

-- CreateIndex
CREATE UNIQUE INDEX "YelpProfilePageTask_url_key" ON "YelpProfilePageTask"("url");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleLatLongTask_address_key" ON "GoogleLatLongTask"("address");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessSiteTask_website_key" ON "BusinessSiteTask"("website");

-- CreateIndex
CREATE UNIQUE INDEX "ChatGptTask_url_key" ON "ChatGptTask"("url");
