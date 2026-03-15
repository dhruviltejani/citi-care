"use client";
import React from "react";
import Link from "next/link";
import { Building2, Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -z-10 animate-pulse transition-all duration-1000"></div>

      <div className="w-full max-w-lg">
        {/* Branding */}
        <div className="flex flex-col items-center mb-10 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="bg-blue-600 p-3 rounded-2xl shadow-xl shadow-blue-200 mb-4 transform transition-transform hover:scale-110">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 font-heading tracking-tight mb-2">Welcome Back</h1>
          <p className="text-slate-500 font-medium">Access your CitiCare citizen dashboard.</p>
        </div>

        {/* Login Card */}
        <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-xl animate-in zoom-in-95 duration-500">
          <CardHeader className="pb-2 pt-10 px-10">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Secure Entry</span>
              <ShieldCheck className="h-5 w-5 text-blue-600/30" />
            </div>
            <CardTitle className="text-2xl font-bold font-heading text-slate-900">Sign In</CardTitle>
            <CardDescription className="text-slate-400 mt-1">Enter your credentials to continue.</CardDescription>
          </CardHeader>
          <CardContent className="p-10 pt-6">
            <form className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</Label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                  <Input 
                    type="email"
                    placeholder="name@example.com" 
                    className="h-12 pl-12 bg-slate-50/50 border-slate-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center mb-1">
                  <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</Label>
                  <Link href="/forgot-password" disable-nav="true" className="text-[11px] font-bold text-blue-600 hover:underline">Forgot password?</Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                  <Input 
                    type="password"
                    placeholder="••••••••" 
                    className="h-12 pl-12 bg-slate-50/50 border-slate-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-bold shadow-xl shadow-blue-100 transition-all hover:scale-[1.02] active:scale-[0.98] group">
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="text-center pt-2">
                <p className="text-slate-500 font-medium">
                  New to CitiCare?{" "}
                  <Link href="/register" className="text-blue-600 font-bold hover:underline underline-offset-4">
                    Register Now
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Support Section */}
        <div className="mt-10 flex items-center justify-center gap-6 text-slate-400">
           <Link href="/help" className="text-sm font-medium hover:text-slate-600 transition-colors">Help Center</Link>
           <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
           <Link href="/privacy" className="text-sm font-medium hover:text-slate-600 transition-colors">Privacy</Link>
           <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
           <Link href="/security" className="text-sm font-medium hover:text-slate-600 transition-colors">Security</Link>
        </div>
      </div>
    </div>
  );
}
