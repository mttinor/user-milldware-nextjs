"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const DashboardPage: React.FC = () => {
  const { state } = useAuth();
  const admin: boolean = ["admin"].includes(state.role);
  const router = useRouter();

  async function checkAuth() {
    await router.push("/");
  }
  useEffect(() => {
    if (!admin) checkAuth();
  }, []);
  return (
    <div>
      {admin ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <p className="mt-5 text-center text-gray-900 text-4xl dark:text-white">
            پنل تنظیمات
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default DashboardPage;
