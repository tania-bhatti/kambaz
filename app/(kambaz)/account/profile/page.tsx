"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Profile</h3>
      <input
        id="wd-username"
        className="block wd-username mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        id="wd-password"
        type="password"
        placeholder="password"
        className="block wd-password mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        placeholder="First Name"
        className="block mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        id="wd-lastname"
        placeholder="Last Name"
        className="block mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        placeholder="Email"
        className="block w-[300px] rounded-md border border-gray-300 py-2 pl-2 mb-2 text-sm"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <select
        id="wd-role"
        className="block w-[300px] appearance-none rounded-md border border-gray-300 py-2 pl-2 mb-2 text-sm"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="mb-2 block w-[300px] rounded-md bg-red-700 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
// import Link from "next/link";
// import { FaRegCalendar } from "react-icons/fa6";

// export default function Profile() {
//   return (
//     <div id="wd-profile-screen" className="max-w-sm">
//       <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
//       <input
//         defaultValue="alice"
//         placeholder="username"
//         className="block wd-username mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
//       />
// //       <input
//         defaultValue="123"
//         placeholder="password"
//         type="password"
//         className="block wd-password mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
//       />
// //       <input 
//         defaultValue="Alice" 
//         placeholder="First Name" 
//         id="wd-firstname" 
//         className="block mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
//       />
// //       <input
//         defaultValue="Wonderland"
//         placeholder="Last Name"
//         id="wd-lastname"
//         className="block mb-2 w-[300px] rounded-md border border-neutral-300 px-3 py-2 text-sm"
//       />
// //       <div className="relative w-[300px]">
//         <input 
//           className="block w-[300px] rounded-md border border-gray-300 py-2 pl-2 mb-2 text-sm"
//           defaultValue="2000-01-01" 
//           type="date" 
//           id="wd-dob" 
//         />
//         <FaRegCalendar className="absolute right-3 top-3"/>
//       </div>
//       <input 
//         defaultValue="alice@wonderland" 
//         type="email" 
//         id="wd-email" 
//         className="block w-[300px] rounded-md border border-gray-300 py-2 pl-2 mb-2 text-sm"
//       />
// //       <select 
//         defaultValue="FACULTY" 
//         id="wd-role"
//         className="block w-[300px] appearance-none rounded-md border border-gray-300 py-2 pl-2 mb-2 text-sm"
//       >
//         <option value="USER">User</option>
//         <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>
//         <option value="STUDENT">Student</option>
//       </select>
// //       <Link 
//         href="/account/signin"
//         className="mb-2 block w-[300px] rounded-md bg-red-700 px-3 py-2 text-center text-white no-underline"
//       >
//         Sign out
//       </Link>
//     </div>
//   );
// }