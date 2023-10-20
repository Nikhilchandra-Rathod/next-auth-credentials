import React, { PropsWithChildren } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function ProtectedLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return <div>This is protected and you do not have access to it.</div>;
  }

  return <>{children}</>;
}

export default ProtectedLayout;
