"use client";
import {
    Upload,
    Camera,
    MapPin,
    Target,
    Plus,
    Minus,
    Lightbulb,
    CheckCircle2,
    Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import CitizenSidebar from "@/components/app/citizen/CitizenSidebar";
import CitizenNavbar from "@/components/app/citizen/CitizenNavbar";

const CreateComplaint = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-50/50">
            <CitizenSidebar />
            
            <div className="flex-1 flex flex-col overflow-hidden">
                <CitizenNavbar title="Create New Complaint" />
                
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-6xl mx-auto">
                        <header className="mb-8">
                            <h1 className="text-2xl font-bold text-slate-900">Submit a Complaint</h1>
                            <p className="text-slate-500">Provide accurate details to help us resolve the issue quickly.</p>
                        </header>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Form Area */}
                            <div className="lg:col-span-2 space-y-6">
                                <Card className="border-none shadow-sm p-6">
                                    <div className="space-y-6">
                                        {/* Category Selection */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold">Complaint Category</Label>
                                            <Select>
                                                <SelectTrigger className="w-full bg-slate-50">
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="public-works">Public Works</SelectItem>
                                                    <SelectItem value="waste">Waste Management</SelectItem>
                                                    <SelectItem value="safety">Public Safety</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold">Description</Label>
                                            <Textarea
                                                placeholder="Describe the problem in detail..."
                                                className="min-h-[150px] bg-slate-50"
                                            />
                                        </div>

                                        {/* Evidence Upload */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold">Evidence & Images</Label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                                                    <Upload className="h-8 w-8 text-slate-400 mb-2" />
                                                    <p className="font-semibold text-sm">Upload Image</p>
                                                    <p className="text-xs text-slate-400">JPEG, PNG up to 5MB</p>
                                                </div>
                                                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                                                    <Camera className="h-8 w-8 text-slate-400 mb-2" />
                                                    <p className="font-semibold text-sm">Take Photo</p>
                                                    <p className="text-xs text-slate-400">Using device camera</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Location Picker */}
                                        <div className="space-y-4">
                                            <Label className="font-semibold">Location Details</Label>
                                            <div className="relative h-64 bg-slate-200 rounded-xl flex items-center justify-center overflow-hidden border">
                                                <div className="flex flex-col items-center text-slate-500">
                                                    <MapPin className="h-10 w-10 text-blue-600 mb-2" />
                                                    <p className="text-sm font-medium">Interactive Map Interface</p>
                                                </div>

                                                {/* Mock Map Controls */}
                                                <div className="absolute right-4 bottom-20 flex flex-col gap-2">
                                                    <Button size="icon" variant="secondary" className="bg-white shadow-md rounded-lg"><Target className="h-4 w-4" /></Button>
                                                </div>
                                                <div className="absolute right-4 bottom-4 flex flex-col gap-1">
                                                    <Button size="icon" variant="secondary" className="bg-white shadow-md rounded-t-lg rounded-b-none border-b"><Plus className="h-4 w-4" /></Button>
                                                    <Button size="icon" variant="secondary" className="bg-white shadow-md rounded-b-lg rounded-t-none"><Minus className="h-4 w-4" /></Button>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <div className="relative flex-1">
                                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                                    <Input placeholder="Manual address input" className="pl-10" />
                                                </div>
                                                <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                                                    <Target className="mr-2 h-4 w-4" /> Detect
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                {/* Bottom Actions */}
                                <div className="flex items-center justify-center gap-4 py-4">
                                    <Button variant="ghost" className="font-bold text-slate-600">Save as Draft</Button>
                                    <Button className="bg-blue-600 hover:bg-blue-700 px-12 py-6 rounded-xl text-lg font-bold shadow-lg shadow-blue-200">
                                        Submit Complaint
                                    </Button>
                                </div>
                            </div>

                            {/* Sidebar Helper Cards */}
                            <div className="space-y-6">
                                {/* Quick Tips */}
                                <Card className="bg-blue-50 border-none relative overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                            <Lightbulb className="text-white h-6 w-6" />
                                        </div>
                                        <h3 className="text-blue-900 font-bold text-lg mb-2">Quick Tips</h3>
                                        <p className="text-blue-800/70 text-sm italic leading-relaxed">
                                            "Provide clear images and precise location for faster resolution. A detailed description helps our engineers understand the priority."
                                        </p>
                                        <Info className="absolute -bottom-4 -right-4 h-24 w-24 text-blue-200/50 rotate-12" />
                                    </CardContent>
                                </Card>

                                {/* Need Help? */}
                                <Card className="border-none shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Need help?</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {[
                                            { q: "How long does it take?", a: "Usually resolved within 48-72 hours." },
                                            { q: "Can I track progress?", a: "Yes, via the 'My Complaints' dashboard." },
                                            { q: "Anonymous reporting?", a: "All reports are securely handled." },
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                                                <div>
                                                    <p className="text-sm font-bold text-slate-800">{item.q}</p>
                                                    <p className="text-xs text-slate-500">{item.a}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 mt-2">
                                            Contact Support
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Submission Status */}
                                <Card className="border-none shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Submission Status</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <StatusStep number="1" label="Details Entered" active />
                                        <StatusStep number="2" label="Department Routing" />
                                        <StatusStep number="3" label="Resolution" />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <footer className="mt-12 text-center text-xs text-slate-400 pb-8">
                            © 2024 CitiCare Citizen Portal. Official Government Application.
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
};

// Helper component for the vertical stepper
const StatusStep = ({ number, label, active = false }: { number: string; label: string; active?: boolean }) => (
    <div className="flex items-center gap-4 relative">
        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 z-10 
      ${active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 border'}`}>
            {number}
        </div>
        <span className={`text-sm font-medium ${active ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>
            {label}
        </span>
        {number !== "3" && (
            <div className="absolute left-[15px] top-8 w-[2px] h-6 bg-slate-100 -z-0" />
        )}
    </div>
);

export default CreateComplaint;