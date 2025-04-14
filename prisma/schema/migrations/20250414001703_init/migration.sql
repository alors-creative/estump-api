-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('Contractor', 'Client', 'Admin');

-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('Approved', 'Pending', 'Denied', 'Expired');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('ProofOfInsurance', 'BusinessLicense', 'ContractorProfile');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Approved', 'Pending', 'Denied', 'Active', 'Inactive');

-- CreateEnum
CREATE TYPE "EquipmentType" AS ENUM ('Machine', 'Truck');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('LookingForContractor', 'ContractorAccepted', 'Completed');

-- CreateEnum
CREATE TYPE "PhotoType" AS ENUM ('Top', 'Side');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "account_type" "AccountType" NOT NULL,
    "password" TEXT NOT NULL,
    "contractor_id" INTEGER,
    "client_id" INTEGER,
    "admin_id" INTEGER,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
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
    "document_type" "DocumentType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "contractor_id" INTEGER,

    CONSTRAINT "Compliance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contractor" (
    "id" SERIAL NOT NULL,
    "business_name" TEXT NOT NULL,
    "disclaimer_accepted" BOOLEAN NOT NULL,
    "revenue_earned" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentPhoto" (
    "id" SERIAL NOT NULL,
    "equipment_type" "EquipmentType" NOT NULL,
    "contractor_id" INTEGER,

    CONSTRAINT "EquipmentPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "total_cost" INTEGER NOT NULL,
    "job_status" "JobStatus" NOT NULL,
    "away_status" BOOLEAN NOT NULL,
    "deposit_received" BOOLEAN NOT NULL,
    "stump_quantity" INTEGER NOT NULL,
    "contractor_id" INTEGER NOT NULL,
    "client_id" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "photo_type" TEXT NOT NULL,
    "compliance_id" INTEGER,
    "contractor_id" INTEGER,
    "equipment_type_id" INTEGER,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "job_id" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stump" (
    "id" SERIAL NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,

    CONSTRAINT "Stump_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StumpPhoto" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "photo_type" "PhotoType" NOT NULL,
    "stump_id" INTEGER NOT NULL,

    CONSTRAINT "StumpPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_contractor_id_key" ON "Account"("contractor_id");

-- CreateIndex
CREATE UNIQUE INDEX "Account_client_id_key" ON "Account"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "Account_admin_id_key" ON "Account"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "Photo_compliance_id_key" ON "Photo"("compliance_id");

-- CreateIndex
CREATE UNIQUE INDEX "Photo_contractor_id_key" ON "Photo"("contractor_id");

-- CreateIndex
CREATE UNIQUE INDEX "Photo_equipment_type_id_key" ON "Photo"("equipment_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "Review_job_id_key" ON "Review"("job_id");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_contractor_id_fkey" FOREIGN KEY ("contractor_id") REFERENCES "Contractor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compliance" ADD CONSTRAINT "Compliance_contractor_id_fkey" FOREIGN KEY ("contractor_id") REFERENCES "Contractor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipmentPhoto" ADD CONSTRAINT "EquipmentPhoto_contractor_id_fkey" FOREIGN KEY ("contractor_id") REFERENCES "Contractor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_contractor_id_fkey" FOREIGN KEY ("contractor_id") REFERENCES "Contractor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_compliance_id_fkey" FOREIGN KEY ("compliance_id") REFERENCES "Compliance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_contractor_id_fkey" FOREIGN KEY ("contractor_id") REFERENCES "Contractor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_equipment_type_id_fkey" FOREIGN KEY ("equipment_type_id") REFERENCES "EquipmentPhoto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stump" ADD CONSTRAINT "Stump_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StumpPhoto" ADD CONSTRAINT "StumpPhoto_stump_id_fkey" FOREIGN KEY ("stump_id") REFERENCES "Stump"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
