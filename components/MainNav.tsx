import { User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const MainNav = () => {
  return (
    <div className="flex p-9">
      <div className="flex-auto w-14">Logo</div>
      <div className="flex items-space justify-between flex-auto w-64 mr-8">
        <Link href="/">DashBoard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/users">Users</Link>
      </div>
      <div className="flex flex-auto w-32 justify-around">
        <ModeToggle />
        <a href="/">
          <User>User</User>
        </a>
      </div>
    </div>
  );
};

export default MainNav;
