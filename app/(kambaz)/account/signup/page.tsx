"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = () => {
    if (!username || !password) return;
    setCurrentUser({
      _id: crypto.randomUUID(),
      username,
      password,
      firstName: "",
      lastName: "",
      email: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
    });
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

// import Link from "next/link";

// export default function Signup() {
//   return (
//     <div id="wd-signup-screen" className="max-w-sm">
//       <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
//       <input
//         placeholder="username"
//         className="wd-username mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
//         defaultValue="ada"
//       />
//       <br />
//       <input
//         placeholder="password"
//         type="password"
//         className="wd-password mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
//         defaultValue="123"
//       />
//       <br />
//       <input
//         placeholder="verify password"
//         type="password"
//         className="wd-password-verify mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
//       />
//       <br />
//       <Link 
//         href="/account/profile"
//         className="mb-2 block w-[300px] rounded bg-green-600 px-3 py-2 text-center text-white no-underline"
//       >
//         Sign up
//       </Link>
//       <Link 
//         href="/account/signin"
//         className="mb-2 block w-[300px] rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
//       >
//         Sign in
//       </Link>
//     </div>
//   );
// }