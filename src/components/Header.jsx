import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./Helper/ModeToggle";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center ">
        <ul>
          <li>
            <Link href="/">Pradeep Yadav</Link>
          </li>
        </ul>
        <ul className="center-flex-item gap-5">
          <li>
            <Link href="/">Skill</Link>
          </li>
          <li>
            <Link href="/">Experience</Link>
          </li>
          <li>
            <Link href="/">Project</Link>
          </li>
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
