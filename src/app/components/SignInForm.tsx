"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function SignInForm() {
  const router = useRouter();
  const { status } = useSession();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    setMessage("Signing in...");
    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      if (!signInResponse || signInResponse.ok !== true) {
        setMessage("Invalid credentials");
      } else {
        router.refresh();
      }
    } catch (error) {
      const err = error as Error;
      console.log(error);
      setMessage(err.message);
    }
    setMessage(message);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("/");
    }
  }, [router, status]);

  return (
    <div className="mx-auto flex flex-col gap-4 bg-gray-400 p-4">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button onClick={handleSubmit}>Sign in</button>

      <p>{message}</p>
    </div>
  );
}

export default SignInForm;
