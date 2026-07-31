"use server";
import { updateUser } from "../services/users";

export async function updateProfile(formData: FormData) {
  const name = formData.get("name") as string;
  const id = formData.get("id") as string;
  console.log(name, id);
  await updateUser(id, name);
}
