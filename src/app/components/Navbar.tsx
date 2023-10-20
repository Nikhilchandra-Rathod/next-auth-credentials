import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full px-4 py-8 bg-gray-200 flex flex-row gap-2">
      <Link href="/">Home</Link>
      <Link href="/protected/dashboard">Dashboard</Link>

      {session && session.user?.email ? (
        <>
          <Link href="/auth/signout">Sign out</Link>
          <p>
            <b>Signed in as {session.user?.email}</b>
          </p>
        </>
      ) : (
        <>
          <Link href="/auth/signin">Sign In</Link>
          <Link href="/auth/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
