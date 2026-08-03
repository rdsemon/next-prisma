"use client";
import { getAllUser } from "../services/users";
import { useState } from "react";
type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};
export default function useUser() {
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  async function handlerGetUsers() {
    setLoading(true);
    const data = await getAllUser();
    setUserData(data);
    setLoading(false);
  }

  function handleClearCart() {
    setUserData([]);
  }

  return { userData, loading, handleClearCart, handlerGetUsers };
}
