-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL4 NOT NULL,
    "name" STRING NOT NULL,
    "cpf" STRING NOT NULL,
    "age" STRING NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_cpf_key" ON "Patient"("cpf");
