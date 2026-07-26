import { createUser, getAllUsers } from "@/app/controllers/user.controller";

export async function POST(req: Request) {
  return createUser(req);
}

export async function GET(req: Request) {
  return getAllUsers();
}
