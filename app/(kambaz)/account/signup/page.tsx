"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const { setCurrentUser } = useAccountContext();
  const signup = async () => {
    const current = await client.signup({ username, password });
    setCurrentUser(current);
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign up</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username block mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="wd-password"
        placeholder="password"
        className="wd-password block mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={signup} id="wd-signup-btn" className="mb-2 block cursor-pointer w-[300px] rounded bg-green-600 px-3 py-2 text-center text-white no-underline">
        Sign up
      </button>{" "}
      <Link href="/account/signin" id="wd-signin-link" className="mb-2 block w-[300px] rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">
        Sign in
      </Link>
    </div>
  );
}