"use client";
import React from "react";
import Link from "next/link";
import { Building2, Mail, Lock, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      console.log(data);
      router.push("/dashboard");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -z-10 animate-pulse transition-all duration-1000"></div>

      <div className="w-full max-w-lg">
        

        {/* Login Card */}

        <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-xl animate-in zoom-in-95 duration-500">
        <ArrowLeft className="absolute top-4 left-4 h-7 w-7 text-slate-300
        hover:text-blue-500 transition-colors cursor-pointer" onClick={() => router.push("/")}/>
          <CardHeader className="pb-2 pt-10 px-10">
            <CardTitle className="text-4xl font-extrabold font-heading text-slate-900 text-center">Citizen Login</CardTitle>
            <CardDescription className="text-slate-400 font-medium mt-1 text-lg text-center">Enter your credentials to continue.</CardDescription>
          </CardHeader>
          <CardContent className="p-10 pt-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</Label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                  <Input 
                    type="string"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    className="h-12 pl-12 bg-slate-50/50 border-slate-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-bold shadow-xl shadow-blue-100 transition-all hover:scale-[1.02] active:scale-[0.98] group" onClick={handleSubmit}>
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
