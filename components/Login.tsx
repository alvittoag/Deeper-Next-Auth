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

  return (
    <div>
      <button onClick={handleLogin}>Sign</button>
    </div>
  );
};

export default Login;
