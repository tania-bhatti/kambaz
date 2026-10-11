import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        placeholder="username"
        className="wd-username mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
        defaultValue="ada"
      />
      <br />
      <input
        placeholder="password"
        type="password"
        className="wd-password  mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
        defaultValue="123"
      />
      <br />
      <label htmlFor="wd-ai-signin-note" className="mb-1 block text-sm">
        Note
      </label>
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className="mb-2 w-[300px] rounded border border-neutral-300 px-3 py-2"
      />
      <br />
      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="mb-2 block w-[300px] rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign in
      </Link>
      <Link 
        href="/account/signup" 
        id="wd-signup-link"
        className="mb-2 block w-[300px] rounded bg-green-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign up
      </Link>
    </div>
  );
}