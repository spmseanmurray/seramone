import React from "react";
import { SignIn } from "@/components/auth/sign-in";
import { auth } from "@/lib/auth";
import { SignOut } from "@/components/auth/sign-out";
import UserAvatar from "@/components/user-avatar";

async function Header() {
  const session = await auth();

  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start text-neutral-content">
        <div className="font-shrikhand text-primary text-2xl mx-4">
          Seremone
        </div>
      </div>
      <div className="navbar-end gap-2">
        <UserAvatar />
        {session?.user ? <SignOut /> : <SignIn />}
      </div>
    </div>
  );
}

export default Header;
