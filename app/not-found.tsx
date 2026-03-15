"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search, TriangleAlert, Building2, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background font-sans">
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse [animation-delay:1s]"></div>
      
      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container relative z-10 flex flex-col items-center px-4 text-center">
        {/* Animated Icon Section */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute h-32 w-32 animate-ping rounded-full bg-primary/20 opacity-20 duration-[3000ms]"></div>
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 shadow-2xl backdrop-blur-sm">
            <TriangleAlert size={48} className="text-primary animate-bounce duration-[2000ms]" />
          </div>
          
          {/* Floating Micro-Icons */}
          <Building2 size={24} className="absolute -top-4 -right-8 text-primary/30 animate-pulse" />
          <MapPin size={24} className="absolute -bottom-6 -left-10 text-primary/30 animate-pulse [animation-delay:0.5s]" />
        </div>

        {/* Content Section */}
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-[140px] font-black leading-none tracking-tighter text-foreground/5 sm:text-[180px] select-none">
              404
            </h1>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mt-[-80px] sm:mt-[-100px]">
              Page Not Found
            </h2>
          </div>
          
          <p className="mx-auto max-w-[500px] text-lg text-muted-foreground font-medium leading-relaxed">
            The infrastructure you're looking for doesn't exist or has moved. 
            Let's get you back on the right track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-8 text-base font-semibold transition-all hover:scale-105 active:scale-95">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 rounded-full px-8 text-base font-semibold border-2 transition-all hover:bg-muted/50 hover:scale-105 active:scale-95">
              <Link href="/search">
                <Search className="mr-2 h-4 w-4" />
                Search CitiCare
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Footer Detail */}
      <div className="absolute bottom-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
        <div className="h-[1px] w-8 bg-muted-foreground/20"></div>
        CitiCare Digital Services
        <div className="h-[1px] w-8 bg-muted-foreground/20"></div>
      </div>
    </div>
  );
}
