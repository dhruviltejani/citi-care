"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  PlusCircle,
  FileText,
  User,
  LogOut,
  Landmark
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '/dashboard' },
  { id: 'create', label: 'Create Complaint', icon: PlusCircle, href: '/create-complaint' },
  { id: 'my-complaints', label: 'My Complaints', icon: FileText, href: '/all-complaints' },
  { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen w-64 bg-white border-r border-slate-100 p-4 sticky top-0 shrink-0 overflow-y-auto">

      {/* --- Logo Section --- */}
      <Link href='/dashboard'>
        <div className="flex items-center gap-3 mb-10 px-2">

          <div className="bg-blue-600 p-2 rounded-xl">
            <Landmark className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 leading-tight">CitiCare</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Government Services
            </span>
          </div>
        </div>
      </Link>

      {/* --- Navigation Items --- */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.id}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              )}
            >
              <item.icon
                size={20}
                className={cn(
                  "transition-colors",
                  isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                )}
              />
              <span className="font-semibold text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* --- Footer / Logout --- */}
      <div className="border-t border-slate-100 pt-4 mt-auto">
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200 group">
          <LogOut size={20} className="text-red-400 group-hover:text-red-500" />
          <span className="font-semibold text-sm">Logout</span>
        </button>
      </div>

    </div>
  );
}