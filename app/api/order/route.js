import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const makam = await prisma.order_makam.findMany();
  return NextResponse.json(makam);
}

export async function POST(req, res) {
  const rest = await req.json();
  const {
    ID_Kelas_Makam,
    Nama_belasungkawa,
    Nama_Pemesan,
    Tanggal_Wafat,
    Telp_pemesan,
  } = rest;
  const order = await prisma.order_makam.create({
    data: {
      ID_Kelas_Makam: ID_Kelas_Makam || null,
      Nama_belasungkawa: Nama_belasungkawa || null,
      Nama_Pemesan: Nama_Pemesan || null,
      Tanggal_Wafat: Tanggal_Wafat ? new Date(Tanggal_Wafat) : null,
      Telp_pemesan: Telp_pemesan || null,
      Status_order: null,
      Tanggal_order: new Date(),
    },
  });
  if (!order) return NextResponse.error(new Error("Gagal membuat order"));

  console.log(order);
  return NextResponse.json(order);
}
