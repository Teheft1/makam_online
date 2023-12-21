import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const rest = await req.json();
  const id = params.id;
  const uid = parseInt(id);
  const { Status_order } = rest;
  const update = await prisma.order_makam.update({
    where: {
      ID_Order_makam: uid,
    },
    data: {
      Status_order,
    },
  });
  console.log(update);
  return NextResponse.json(update);
}
