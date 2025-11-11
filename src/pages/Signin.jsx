import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <button
          type="submit"
          className="bg-yellow-500 text-black px-4 py-2 rounded mt-2"
          onClick={() => navigate("/")}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
