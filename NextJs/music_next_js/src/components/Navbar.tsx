"use client"
import { cn } from "@/utils/cn";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./navbar-menu";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        test

                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">


                    <div className="flex flex-col space-y-4 text-sm">

                        <HoveredLink href="/courses">All Courses</HoveredLink>

                    </div>

                </MenuItem>


            </Menu>
        </div>
    )
}
export default Navbar;