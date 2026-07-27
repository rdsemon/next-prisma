import { getOneUser, deleteUser } from "@/app/controllers/user.controller";
export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const { userId } = await params;
  return getOneUser(userId);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const { userId } = await params;

  return deleteUser(userId);
}
