import prisma from "../lib/prisma";
import { NextResponse } from "next/server";

export const createUser = async (req: Request) => {
  const body = await req.json();
  const users = await prisma.user.create({ data: body });
  return NextResponse.json(users);
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};
