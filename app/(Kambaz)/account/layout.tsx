import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account" className="flex gap-4 lg:gap-16">
      <div className="hidden w-[140px] shrink-0 md:block">
        <AccountNavigation /> 
      </div>
       <div>
        {children} 
       </div>
      
    </div>
  );
}