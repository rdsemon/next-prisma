"use client";
import { getAllUser } from "./services/users";
import UserCart from "./components/UserCart";
import { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

export default function Home() {
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

  return (
    <div>
      <h1>Hello world</h1>
      {loading ? "loadind...." : <UserCart userInfo={userData} />}
      <button
        onClick={handlerGetUsers}
        className="bg-green-500 px-3 py-2 active:translate-y-1 transition-all rounded-md mt-3 text-xl "
      >
        {loading ? "loading...." : "Get all user"}
      </button>
      <button
        onClick={handleClearCart}
        className="bg-red-500 px-3 py-2 active:translate-y-1 transition-all rounded-md mt-3 text-xl "
      >
        Clear user
      </button>
    </div>
  );
}
