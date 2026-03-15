"use client";
import {
    Camera,
    ShieldCheck,
    Lock,
    User,
    Mail,
    Phone,
    MapPin,
    Home,
    Info,
    Save
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CitizenNavbar from "@/components/app/citizen/CitizenNavbar";
import CitizenSidebar from "@/components/app/citizen/CitizenSidebar";

const ProfileManagement = () => {
    return (

        <div className="flex h-screen overflow-hidden bg-slate-50/50">
            <CitizenSidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <CitizenNavbar title="My Complaint" />
                <div className="flex-1 bg-slate-50/30 p-8 min-h-screen overflow-y-auto">
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <header className="mb-8">
                            <h1 className="text-3xl font-extrabold text-slate-900">Profile Management</h1>
                            <p className="text-slate-500 mt-1">View and update your personal information and security settings.</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                            {/* Left Column: Profile Card & Security */}
                            <div className="md:col-span-4 space-y-6">
                                {/* User Profile Card */}
                                <Card className="border-none shadow-sm overflow-hidden text-center p-8">
                                    <div className="relative inline-block mb-4">
                                        <Avatar className="h-32 w-32 border-4 border-white shadow-sm bg-orange-200">
                                            <AvatarImage src="" />
                                            <AvatarFallback className="bg-orange-200 text-orange-400"></AvatarFallback>
                                        </Avatar>
                                        <Button size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-blue-600 border-2 border-white hover:bg-blue-700">
                                            <Camera className="h-4 w-4 text-white" />
                                        </Button>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-800">John Doe</h2>
                                    <p className="text-sm text-slate-400 mb-6">New York, USA</p>

                                    <div className="grid grid-cols-2 border-t pt-6">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Reports</p>
                                            <p className="text-xl font-bold text-blue-600">12</p>
                                        </div>
                                        <div className="border-l">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Resolved</p>
                                            <p className="text-xl font-bold text-emerald-500">8</p>
                                        </div>
                                    </div>
                                </Card>

                                {/* Security Card */}
                                <Card className="border-none shadow-sm p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <ShieldCheck className="h-5 w-5 text-blue-600" />
                                        <h3 className="font-bold text-slate-800">Security</h3>
                                    </div>
                                    <Button variant="secondary" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold gap-2 py-6">
                                        <Lock className="h-4 w-4" /> Change Password
                                    </Button>
                                </Card>
                            </div>

                            {/* Right Column: Personal Information Form */}
                            <div className="md:col-span-8 space-y-6">
                                <Card className="border-none shadow-sm overflow-hidden">
                                    <CardHeader className="border-b px-8 py-6">
                                        <CardTitle className="text-lg font-bold">Personal Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-8 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Full Name */}
                                            <div className="space-y-2">
                                                <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</Label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                                    <Input defaultValue="John Doe" className="pl-10 bg-slate-50 border-slate-200" />
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-2">
                                                <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</Label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                                    <Input defaultValue="john.doe@example.com" className="pl-10 bg-slate-50 border-slate-200" />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="space-y-2">
                                                <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</Label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                                    <Input defaultValue="+1 (555) 000-0000" className="pl-10 bg-slate-50 border-slate-200" />
                                                </div>
                                            </div>

                                            {/* City */}
                                            <div className="space-y-2">
                                                <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">City</Label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                                    <Input defaultValue="New York" className="pl-10 bg-slate-50 border-slate-200" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Residential Address */}
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Residential Address (Optional)</Label>
                                            <div className="relative">
                                                <Home className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                                <Input
                                                    defaultValue="123 Liberty St, Suite 400, New York, NY 10006"
                                                    className="pl-10 bg-slate-50 border-slate-200 h-24 items-start pt-3"
                                                />
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex justify-end gap-3 pt-4">
                                            <Button variant="outline" className="px-8 border-slate-200 font-bold text-slate-600">
                                                Cancel
                                            </Button>
                                            <Button className="px-8 bg-blue-600 hover:bg-blue-700 font-bold gap-2">
                                                <Save className="h-4 w-4" /> Save Changes
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Data Verification Alert */}
                                <div className="bg-blue-50 border-none rounded-2xl p-6 flex gap-4 items-start">
                                    <div className="bg-blue-600 p-1 rounded-full shrink-0 mt-0.5">
                                        <Info className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-900 text-sm mb-1">Data Verification</h4>
                                        <p className="text-blue-800/70 text-xs leading-relaxed">
                                            Changes to your legal name or identity proof require approval from the administrative office. Most other fields update instantly.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileManagement;