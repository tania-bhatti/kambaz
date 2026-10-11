import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        placeholder="username"
        className="wd-username mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
        defaultValue="ada"
      />
      <br />
      <input
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
        defaultValue="123"
      />
      <br />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
      />
      <br />
      <Link 
        href="/account/profile"
        className="mb-2 block w-[300px] rounded bg-green-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign up
      </Link>
      <Link 
        href="/account/signin"
        className="mb-2 block w-[300px] rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign in
      </Link>
    </div>
  );
}