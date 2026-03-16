"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building2, Mail, Lock, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/actions/auth";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await loginUser({ email, password });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -z-10 animate-pulse transition-all duration-1000"></div>

      <div className="w-full max-w-lg">
        <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-xl animate-in zoom-in-95 duration-500">
          <div className="p-4 absolute">
            <Button variant="ghost" size="icon" onClick={() => router.push("/")} className="rounded-full">
              <ArrowLeft className="h-6 w-6 text-slate-400 hover:text-blue-500 transition-colors" />
            </Button>
          </div>

          <CardHeader className="pb-2 pt-10 px-10">
            <CardTitle className="text-4xl font-extrabold text-slate-900 text-center">Citizen Login</CardTitle>
            <CardDescription className="text-slate-400 font-medium mt-1 text-lg text-center">Enter your credentials to continue.</CardDescription>
          </CardHeader>

          <CardContent className="p-10 pt-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Error Message UI */}
              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-1">
                  {error}
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</Label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                  <Input
                    required
                    type="email" // Fixed from "string"
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
                  <Link href="/forgot-password" size-nav="true" className="text-[11px] font-bold text-blue-600 hover:underline">Forgot password?</Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                  <Input
                    required
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pl-12 bg-slate-50/50 border-slate-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  disabled={loading}
                  type="submit" // The form handles this via onSubmit
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-bold shadow-xl shadow-blue-100 transition-all hover:scale-[1.02] active:scale-[0.98] group"
                >
                  {loading ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center pt-2">
                <p className="text-slate-500 font-medium">
                  New to CitiCare?{" "}
                  <Link href="/register" className="text-blue-600 font-bold hover:underline underline-offset-4 cursor-pointer">
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