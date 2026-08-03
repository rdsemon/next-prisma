"use client";
import UserCart from "./components/UserCart";
import useUser from "./hooks/useUser";

export default function Home() {
  const { userData, loading, handlerGetUsers, handleClearCart } = useUser();

  return (
    <div>
      <h1>Hello world</h1>
      <div>{loading ? "loadind...." : <UserCart userInfo={userData} />}</div>

      <div>
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
    </div>
  );
}
