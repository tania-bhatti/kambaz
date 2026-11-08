"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
import "../kambaz.css"

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => (
        <Fragment key={link}>
          <Link
            href={`/account/${link}`}
            className={
              pathname == `/account/${link}`
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {link === "signin"
              ? "Signin"
              : link === "signup"
                ? "Signup"
                : "Profile"}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import "../kambaz.css"

// export default function AccountNavigation() {
//   const pathname = usePathname() ?? "";
//   return (
//     <div id="wd-kambaz-navigation" className="wd list-group rounded-none text-lg">
//       <Link 
//         href="/account/signin" 
//         id="wd-signin-link"
//         className={
//           pathname == "/account/signin"
//           ? "list-group-item active border-0"
//           : "list-group-item border-0 text-red-600"
//         }
//         >
//         Signin
//       </Link>
//       <Link 
//         href="/account/signup" 
//         id="wd-signup-link"
//         className={
//           pathname == "/account/signup"
//           ? "list-group-item active border-0"
//           : "list-group-item border-0 text-red-600"
//         }
//       >
//         Signup
//       </Link>
//       <Link 
//         href="/account/profile" 
//         id="wd-profile-link"
//         className={
//           pathname == "/account/profile"
//           ? "list-group-item active border-0"
//           : "list-group-item border-0 text-red-600"
//         }
//       >
//         Profile
//       </Link>
//     </div>
//   );
// }