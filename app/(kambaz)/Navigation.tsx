"use client";

import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { LuBookText } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { LuInbox } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import Link from "next/link";

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
          ${pathname == "/account" || pathname.startsWith("/account/")
            ? "bg-white text-red-600"
            : "bg-black text-white"
          }
        `}
      >
        <FaRegCircleUser className="inline-block text-3xl" />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className={`block py-3 text-center text-sm text-red-600 no-underline
          ${pathname == "/dashboard" || pathname.startsWith("/dashboard/")
            ? "bg-white text-red-600"
            : "bg-black text-white"
          }
        `}
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>
      <Link 
        href="/courses"
        id="wd-courses-link"
        className={`block py-3 text-center text-sm no-underline
          ${pathname == "/courses" || pathname.startsWith("/courses/")
            ? "bg-white text-red-600"
            : "bg-black text-white"
          }
        `}
      >
        <LuBookText className="inline-block text-3xl text-red-600" />
        <br />
        Courses
      </Link>
      <Link 
        href="/calendar"
        id="wd-calendar-link"
        className={`block py-3 text-center text-sm no-underline
          ${pathname == "/calendar" || pathname.startsWith("/calendar/")
            ? "bg-white text-red-600"
            : "bg-black text-white"
          }
        `}
      >
        <LuCalendarDays className="inline-block text-3xl text-red-600" />
        <br /> 
        Calendar
      </Link>
      <Link 
        href="/inbox"
        id="wd-inbox-link"
        className={`block py-3 text-center text-sm no-underline
          ${pathname == "/inbox" || pathname.startsWith("/inbox/")
            ? "bg-white text-red-600"
            : "bg-black text-white"
          } 
        `}
      >
        <LuInbox className="inline-block text-3xl text-red-600" />
        <br /> 
        Inbox
      </Link>
      <Link 
        href="/labs"
        id="wd-labs-link"
        className={`block py-3 text-center text-sm no-underline
          ${pathname == "/labs" || pathname.startsWith("/labs/")
            ? "bg-white text-red-600"
            : "bg-black text-white"
          }
        `}
      >
        <LuSettings className="inline-block text-3xl text-red-600" />
        <br /> 
        Labs
      </Link>
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className={`block py-3 text-center text-sm no-underline
          ${pathname == "/labs" || pathname.startsWith("/labs/")
            ? "bg-white text-red-600"
            : "bg-black text-white"
          }
        `}
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}