/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."InstitutionType" AS ENUM ('BANK', 'INVESTMENT_BROKER', 'FINTECH', 'OTHER');

-- CreateTable
CREATE TABLE "public"."Instituition" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shoortName" TEXT NOT NULL,
    "type" "public"."InstitutionType" NOT NULL,
    "logoUrl" TEXT,
    "primaryColor" TEXT,

    CONSTRAINT "Instituition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instituition_name_key" ON "public"."Instituition"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "public"."User"("phone");
