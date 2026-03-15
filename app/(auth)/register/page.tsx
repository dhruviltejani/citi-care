"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, UserCheck, Zap, ArrowRight, Lock, 
  Mail, Phone, MapPin, Building2 
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

export default function SimpleRegistration() {
  // 1. Single state object for the whole form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // 2. Simple handler for all inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data Submitted:", formData);
    alert("Check the console! Form submitted successfully.");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl overflow-hidden border-none shadow-2xl rounded-3xl">
        <CardContent className="p-0 flex flex-col md:flex-row">
          
          {/* --- Left Branding Section --- */}
          <div className="w-full md:w-[40%] bg-blue-50 p-10 flex flex-col items-center justify-center text-center">
            <div className="relative mb-6">
              <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center">
                <UserCheck size={70} className="text-blue-600" />
              </div>
              <div className="absolute bottom-2 right-2 bg-white p-2 rounded-xl shadow-md border border-green-100">
                <ShieldCheck className="text-green-500" size={24} />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-2">Secure Citizen Portal</h2>
            <p className="text-slate-500 text-sm mb-8 px-6">
              Join thousands of citizens accessing official government services securely.
            </p>

            <div className="w-full space-y-3">
              <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm border border-slate-100">
                <Lock size={16} className="text-blue-500" />
                <span className="text-xs font-semibold text-slate-600">End-to-end encryption</span>
              </div>
              <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm border border-slate-100">
                <Zap size={16} className="text-blue-500" />
                <span className="text-xs font-semibold text-slate-600">Fast-track applications</span>
              </div>
            </div>
          </div>

          {/* --- Right Form Section --- */}
          <div className="w-full md:w-[60%] bg-white p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Citizen Registration</h1>
              <p className="text-slate-500 text-sm mt-1">Create your official account to access services.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <UserCheck className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="fullName" placeholder="John Doe" className="pl-10" value={formData.fullName} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="email" type="email" placeholder="john@example.com" className="pl-10" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="phone" placeholder="+1 (555) 000-0000" className="pl-10" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="city">City</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="city" placeholder="Washington D.C." className="pl-10" value={formData.city} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="address">Residential Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input id="address" placeholder="123 Government Way, Apt 4B" className="pl-10" value={formData.address} onChange={handleChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="password" type="password" placeholder="••••••••" className="pl-10" value={formData.password} onChange={handleChange} required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="confirmPassword" type="password" placeholder="••••••••" className="pl-10" value={formData.confirmPassword} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox 
                  id="terms" 
                  checked={formData.terms} 
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: checked as boolean }))} 
                />
                <label htmlFor="terms" className="text-xs text-slate-500 leading-tight">
                  I agree to the <span className="text-blue-600 font-bold">Terms of Service</span> and <span className="text-blue-600 font-bold">Privacy Policy</span>.
                </label>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 rounded-xl font-bold">
                Create Citizen Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-xs text-slate-500">
                Already have an account? <span className="text-blue-600 font-bold cursor-pointer underline-offset-4 hover:underline">Login here</span>
              </p>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}