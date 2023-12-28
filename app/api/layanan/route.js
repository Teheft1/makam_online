import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const layanan = await prisma.layanan.findMany();
    return NextResponse.json(layanan);
}

export async function POST(req, res) {
    const rest = await req.json();
}