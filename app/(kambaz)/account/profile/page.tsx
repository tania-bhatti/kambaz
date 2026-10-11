import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa6";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
      />
      <br />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
      />
      <br />
      <input 
        defaultValue="Alice" 
        placeholder="First Name" 
        id="wd-firstname" 
        className="mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
      />
      <br />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
      />
      <br />
      <div className="relative w-[300px]">
        <input 
          className="w-[300px] rounded-md border border-gray-300 py-2 pl-2 mb-2 text-sm"
          defaultValue="2000-01-01" 
          type="date" 
          id="wd-dob" 
        />
        <FaRegCalendar className="absolute right-3 top-3"/>
      </div>
      <input 
        defaultValue="alice@wonderland" 
        type="email" 
        id="wd-email" 
        className="w-[300px] rounded-md border border-gray-300 py-2 pl-2 mb-2 text-sm"
      />
      <br />
      <select 
        defaultValue="FACULTY" 
        id="wd-role"
        className="w-[300px] appearance-none rounded-md border border-gray-300 py-2 pl-2 mb-2 text-sm"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link 
        href="/account/signin"
        className="mb-2 block w-[300px] rounded-md bg-red-700 px-3 py-2 text-center text-white no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}