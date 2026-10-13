import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex">
      <div>
        <AccountNavigation />
      </div>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}