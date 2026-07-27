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

export const getOneUser = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return NextResponse.json({ message: "user not found" }, { status: 404 });
  }
  return NextResponse.json(user);
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return NextResponse.json({ message: "user not found" }, { status: 404 });
  }

  await prisma.user.delete({ where: { id } });

  return NextResponse.json({ message: "delete successful" });
};
