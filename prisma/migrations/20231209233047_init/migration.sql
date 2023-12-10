-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "alergiaId" INTEGER,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActividadesDiarias" (
    "id" SERIAL NOT NULL,
    "nombreActividad" TEXT NOT NULL,
    "detalleActividad" TEXT,
    "fechaActividad" TIMESTAMP(3) NOT NULL,
    "doctorId" INTEGER,

    CONSTRAINT "ActividadesDiarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alergias" (
    "id" SERIAL NOT NULL,
    "nombreAlergia" TEXT NOT NULL,
    "detalleTratamiento" TEXT,

    CONSTRAINT "Alergias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consultorio" (
    "id" SERIAL NOT NULL,
    "numeroPiso" TEXT NOT NULL,
    "numeroPuerta" TEXT NOT NULL,

    CONSTRAINT "Consultorio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cita" (
    "id" SERIAL NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaProgramada" TIMESTAMP(3) NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "doctorId" INTEGER,
    "consultorioId" INTEGER,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_cedula_key" ON "Paciente"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_correo_key" ON "Doctor"("correo");

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_alergiaId_fkey" FOREIGN KEY ("alergiaId") REFERENCES "Alergias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActividadesDiarias" ADD CONSTRAINT "ActividadesDiarias_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_consultorioId_fkey" FOREIGN KEY ("consultorioId") REFERENCES "Consultorio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
