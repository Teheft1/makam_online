import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const makam = await prisma.makam.findMany();
  return NextResponse.json(makam);
}

export async function POST(req, res) {
  const rest = await req.json();
  console.log(rest);
  const {
    ID_pemakaman,
    ID_Kelas_Makam,
    ID_PJ,
    Nomor_Makam,
    Nama_belasungkawa,
    Tanggal_Wafat,
    Status_Makam,
  } = rest;
  const makam = await prisma.makam.create({
    data: {
      Nomor_Makam: Nomor_Makam,
      pemakaman: ID_pemakaman,
      kelas_makam: ID_Kelas_Makam,
      pj_makam: ID_PJ,
      Nama_belasungkawa: Nama_belasungkawa || null,
      Tanggal_Wafat: Tanggal_Wafat ? new Date(Tanggal_Wafat) : null,
      Status_Makam: Status_Makam || null,
      pemakaman: {
        connect: {
          ID_Pemakaman: ID_pemakaman,
        },
      },
      kelas_makam: {
        connect: {
          ID_kelas_makam: ID_Kelas_Makam,
        },
      },
      pj_makam: {
        connect: {
          ID_PJ: ID_PJ,
        },
      },
      catatan_makam: null,
    },
  });
  if (!makam) return NextResponse.error(new Error("Gagal membuat makam"));

  return NextResponse.json(makam);
}
