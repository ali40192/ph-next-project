"use client";

import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/items";

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "ali@gmail.com" && password === "123456") {
      Cookies.set("auth", "true", { expires: 1 });
      router.push(redirectUrl);
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Login
        </button>

        <p className="text-xs text-center text-gray-400">
          Demo Login: ali@gmail.com / 123456
        </p>
      </form>
    </div>
  );
}
