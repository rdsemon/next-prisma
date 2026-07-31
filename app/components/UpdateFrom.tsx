"use client";
import { updateProfile } from "../lib/actions";
export default function UpdateFrom({ id }: { id: string }) {
  return (
    <form action={updateProfile}>
      <input type="text" name="name" placeholder="enter your name" />
      <input type="hidden" name="id" value={id} />
      <button type="submit">Submit</button>
    </form>
  );
}
