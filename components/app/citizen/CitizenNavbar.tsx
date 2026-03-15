"use client";

import React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CitizenNavbarProps {
  title?: string;
}

const CitizenNavbar = ({ title = "Dashboard" }: CitizenNavbarProps) => {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-8 sticky top-0 z-10 w-full">
      <h1 className="text-xl font-bold text-slate-800">{title}</h1>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative transition-colors hover:bg-slate-50">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
        </Button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
            <p className="text-xs text-slate-500 font-medium">Citizen ID: 48291</p>
          </div>
          <Avatar className="h-10 w-10 border border-slate-100 shadow-sm transition-transform hover:scale-105">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Sarah Jenkins" />
            <AvatarFallback className="bg-blue-50 text-blue-600 font-bold">SJ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default CitizenNavbar;
