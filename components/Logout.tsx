"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button onClick={() => signOut().then(() => window.location.replace("/"))}>
      Sign Out
    </button>
  );
};

export default Logout;
