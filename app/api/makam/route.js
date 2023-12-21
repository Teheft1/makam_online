import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const makam = await prisma.makam.findMany();
  return NextResponse.json(makam);
}

export async function POST(req, res) {
    const rest = await req.json();
    const create = await prisma.makam.create({
            
    })
}