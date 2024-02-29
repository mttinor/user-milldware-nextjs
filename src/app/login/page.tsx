"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/base/Input";
import { showToast } from "@/components/base/Toast";
import { useAuth } from "@/contexts/AuthContext";
import { TUserPayload } from "@/reducers/authReducer";

const SAMPLE_USERS = [
  {
    id: 1,
    name: "ali",
    username: "ali",
    email: "ali@yahoo.com",
    role: "admin",
  },
  {
    id: 2,
    name: "mehdi",
    username: "mehdi",
    email: "mehdi@yahoo.com",
    role: "edit",
  },
];

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const { dispatch } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      const user: TUserPayload | null | undefined = SAMPLE_USERS.find(
        (x) => x.username === username
      );
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        await router.push("/");
        showToast("به سامانه مدیریت کاربران خوش امدید", "success");
      } else {
        showToast("رمز عبور  یا نام کاربری درست نیست", "error");
      }
    } else {
      showToast("لطفا نام کاربری و کلمه عبور پرشود ", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">ورود</h1>
        <form onSubmit={handleLogin}>
          <Input
            title="نام کاربری"
            value={username}
            onChangeValue={(e) => setUsername(e.target.value)}
          />
          <Input
            title="رمز عبور"
            type="password"
            value={password}
            onChangeValue={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
