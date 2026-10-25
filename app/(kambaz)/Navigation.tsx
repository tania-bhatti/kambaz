"use client";

import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LuBookText } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { LuInbox } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import Link from "next/link";

const LINKS = [
  {label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard}, 
  {label: "Courses", path: "/courses", icon: LuBookText}, 
  {label: "Calendar", path: "/calendar", icon: LuCalendarDays}, 
  {label: "Inbox", path: "/inbox", icon: LuInbox}, 
  {label: "Labs", path: "/labs", icon: LuSettings},
  {label: "History", path: "/history", icon: IoCalendarOutline},
  {label: "LabsAI", path: "/labs", icon: FaCircleQuestion},
] as const; 

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className={`block py-3 text-center text-sm no-underline
          ${pathname.startsWith("/account/")
            ? "bg-white text-red-600"
            : "bg-black text-white"
          }
        `}
      >
        <FaRegCircleUser className="inline-block text-3xl" />
        <br />
        Account
      </Link>
      {LINKS.map((link) => {
        const active = 
          link.label === "Courses" 
            ? pathname.includes("/courses") 
            : pathname.includes(link.path); 
        const Icon = link.icon; 
        return (
          <Link 
            key={link.label}
            href={link.path} 
            id={`wd-${link.label.toLowerCase()}-link`}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white" 
            }`}
          >
            <Icon className="inline-block text-3xl text-red-600" /> <br /> 
            {link.label}
          </Link>
        )
      })}
    </nav>
  );
}