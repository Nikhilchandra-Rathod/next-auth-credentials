"use client";
import { useEffect } from "react";
import { signOut } from "next-auth/react";

function SignOut() {
  useEffect(() => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  }, []);

  return null;
}

export default SignOut;
