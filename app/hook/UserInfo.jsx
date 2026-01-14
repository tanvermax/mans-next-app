"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  console.log(session)

  if (!session) return <p>Not signed in</p>;

  return (
    <div>
      <p>Signed in as {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
