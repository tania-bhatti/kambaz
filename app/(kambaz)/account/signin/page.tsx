"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as db from "../../database";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign in</h3>
      <input
        placeholder="username"
        id="wd-username"
        className="wd-username block mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="wd-password block mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button type="button" onClick={signin} id="wd-signin-btn" className="mb-2 block cursor-pointer w-[300px] rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">
        Sign in
      </button>
      <Link href="/account/signup" id="wd-signup-link" className="mb-2 block w-[300px] rounded bg-green-600 px-3 py-2 text-center text-white no-underline">
        Sign up
      </Link>
    </div>
  );
}
// import Link from "next/link";

// export default function Signin() {
//   return (
//     <div id="wd-signin-screen" className="max-w-sm">
//       <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
//       <input
//         placeholder="username"
//         className="wd-username mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
//         defaultValue="ada"
//       />
//       <br />
//       <input
//         placeholder="password"
//         type="password"
//         className="wd-password  mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
//         defaultValue="123"
//       />
//       <br />
//       <label htmlFor="wd-ai-signin-note" className="mb-1 block text-sm">
//         Note
//       </label>
//       <input
//         id="wd-ai-signin-note"
//         placeholder="sample note"
//         className="mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
//       />
//       <br />
//       <Link
//         href="/dashboard"
//         id="wd-signin-btn"
//         className="mb-2 block w-[300px] rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
//       >
//         Sign in
//       </Link>
//       <Link 
//         href="/account/signup" 
//         id="wd-signup-link"
//         className="mb-2 block w-[300px] rounded bg-green-600 px-3 py-2 text-center text-white no-underline"
//       >
//         Sign up
//       </Link>
//     </div>
//   );
// }