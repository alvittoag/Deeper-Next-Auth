"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session.status === "authenticated") router.push("/dashboard");
  }, [session]);

  const handleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleLoginGit = () => {
    signIn("github", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex justify-center h-[100vh] items-center flex-col gap-10">
      <button onClick={handleLogin}>Sign Google</button>
      <button onClick={handleLoginGit}>Sign Github</button>
    </div>
  );
};

export default Login;
