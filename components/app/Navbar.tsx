import React from "react";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
            {/* Left Section: Logo */}
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                    <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">
                    CitizenCare
                </span>
            </div>

            {/* Right Section: Navigation Links & Auth */}
            <div className="flex items-center gap-8">
                {/* Nav Links - Hidden on small screens, shown on md+ */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Home
                    </Link>
                    <Link href="/about-us" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Contact
                    </Link>
                    <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Login
                    </Link>
                </div>

                {/* Shadcn Register Button */}
                <Link href="/register">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl shadow-md">
                        Register
                    </Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;