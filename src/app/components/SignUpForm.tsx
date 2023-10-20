"use client";
import React, { useState } from "react";
import { signUp } from "../actions/users/SignUp";

function SignUpForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    setMessage("Signing up...");
    const message = await signUp(email, password);
    setMessage(message);
  };

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
      <button onClick={handleSubmit}>Sign up</button>

      <p>{message}</p>
    </div>
  );
}

export default SignUpForm;
