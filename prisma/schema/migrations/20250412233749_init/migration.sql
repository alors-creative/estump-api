-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('Approved', 'Pending', 'Denied', 'Expired');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('LookingForContractor', 'ContractorAccepted', 'Completed');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('Contractor', 'Client', 'Admin');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountPassword" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "AccountPassword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "total_revenue" INTEGER NOT NULL,
    "amount_of_jobs" INTEGER NOT NULL,
    "amount_of_contractors" INTEGER NOT NULL,
    "active_states" TEXT NOT NULL,
    "active_cities" TEXT NOT NULL,
    "active_advertising" TEXT NOT NULL,
    "split_80_20" INTEGER NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessLicense" (
    "id" SERIAL NOT NULL,
    "date_of_expiration" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusinessLicense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "disclaimer_accepted" BOOLEAN NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Compliance" (
    "id" SERIAL NOT NULL,
    "status" "StatusType" NOT NULL,

    CONSTRAINT "Compliance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contractor" (
    "id" SERIAL NOT NULL,
    "business_name" TEXT NOT NULL,
    "disclaimer_accepted" BOOLEAN NOT NULL,
    "revenue_earned" INTEGER NOT NULL,

    CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "total_cost" INTEGER NOT NULL,
    "job_status" "JobStatus" NOT NULL,
    "away_status" BOOLEAN NOT NULL,
    "deposit_received" BOOLEAN NOT NULL,
    "stump_quantity" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "photo_type" TEXT NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProofOfInsurance" (
    "id" SERIAL NOT NULL,
    "date_of_expiration" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProofOfInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stump" (
    "id" SERIAL NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,

    CONSTRAINT "Stump_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StumpPhoto" (
    "id" SERIAL NOT NULL,
    "machine" TEXT NOT NULL,
    "contractor" TEXT NOT NULL,
    "truck" TEXT NOT NULL,

    CONSTRAINT "StumpPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeOfAccount" (
    "id" SERIAL NOT NULL,
    "type_of_account" "AccountType" NOT NULL,

    CONSTRAINT "TypeOfAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foo" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Foo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");
