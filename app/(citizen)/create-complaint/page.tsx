"use client";

import React, { useState, useRef } from "react";
import {
    Upload, Camera, MapPin, Target, Plus, Minus,
    Lightbulb, CheckCircle2, Info, Loader2, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import CitizenSidebar from "@/components/app/citizen/CitizenSidebar";
import CitizenNavbar from "@/components/app/citizen/CitizenNavbar";
import { createComplaint } from "@/app/actions/complaint";
import { useRouter } from "next/navigation";

enum ComplaintCategory {
    ROAD = "road",
    GARBAGE = "garbage",
    WATER = "water",
    ELECTRICITY = "electricity",
    DRAINAGE = "drainage",
    STREET_LIGHT = "street_light",
    SEWAGE = "sewage",
    OTHER = "other",
}

const CreateComplaint = () => {

    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [detecting, setDetecting] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        category: "",
        description: "",
        coordinates: { lat: null as number | null, lng: null as number | null },
        image: null as string | null
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id || 'description']: e.target.value }));
    };

    const handleCategoryChange = (value: string) => {
        setFormData(prev => ({ ...prev, category: value }));
    };

    // --- Fixed Image Handler ---
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result as string;
                setImagePreview(base64String);
                // Now setting the string directly into formData
                setFormData(prev => ({ ...prev, image: base64String }));
            };

            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
        setFormData(prev => ({ ...prev, image: null }));
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const detectLocation = () => {
        setDetecting(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData(prev => ({
                        ...prev,
                        coordinates: { lat: position.coords.latitude, lng: position.coords.longitude },
                        address: `Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`
                    }));
                    setDetecting(false);
                },
                (error) => {
                    alert("Could not detect location. Please enter manually.");
                    setDetecting(false);
                }
            );
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.category || !formData.description) {
            alert("Please fill in the required fields.");
            return;
        }

        setLoading(true);
        try {
            const res = await createComplaint(formData);

            if (!res.status) {
                alert(res.message);
                return;
            }

            router.refresh();
        } catch (error) {
            alert("Failed to submit. Please try again.");
        } finally {
            setLoading(false);
            setFormData({
                category: "",
                description: "",
                coordinates: { lat: null, lng: null },
                image: null
            });
            setImagePreview(null);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50/50">
            <CitizenSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <CitizenNavbar title="Create New Complaint" />
                <main className="flex-1 p-8 overflow-y-auto">
                    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
                        <header className="mb-8">
                            <h1 className="text-2xl font-bold text-slate-900">Submit a Complaint</h1>
                            <p className="text-slate-500">Provide accurate details to help us resolve the issue quickly.</p>
                        </header>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <Card className="border-none shadow-sm p-6">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="font-semibold">Complaint Category *</Label>
                                            <Select onValueChange={handleCategoryChange} value={formData.category} required>
                                                <SelectTrigger className="w-full bg-slate-50">
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value={ComplaintCategory.ROAD}>Road/Infrastructure</SelectItem>
                                                    <SelectItem value={ComplaintCategory.GARBAGE}>Waste Management</SelectItem>
                                                    <SelectItem value={ComplaintCategory.WATER}>Water Supply</SelectItem>
                                                    <SelectItem value={ComplaintCategory.STREET_LIGHT}>Streetlight</SelectItem>
                                                    <SelectItem value={ComplaintCategory.OTHER}>Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="font-semibold">Description *</Label>
                                            <Textarea
                                                required
                                                id="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                placeholder="Describe the problem in detail..."
                                                className="min-h-[150px] bg-slate-50"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="font-semibold">Evidence & Images</Label>
                                            <input
                                                type="file"
                                                hidden
                                                ref={fileInputRef}
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                            />

                                            {imagePreview ? (
                                                <div className="relative w-full h-48 rounded-xl overflow-hidden border">
                                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                                    <Button
                                                        type="button"
                                                        variant="destructive"
                                                        size="icon"
                                                        className="absolute top-2 right-2 rounded-full h-8 w-8"
                                                        onClick={removeImage}
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div
                                                        onClick={() => fileInputRef.current?.click()}
                                                        className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                                                    >
                                                        <Upload className="h-8 w-8 text-slate-400 mb-2" />
                                                        <p className="font-semibold text-sm">Upload Image</p>
                                                        <p className="text-xs text-slate-400">JPEG, PNG up to 5MB</p>
                                                    </div>
                                                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 opacity-50 cursor-not-allowed">
                                                        <Camera className="h-8 w-8 text-slate-400 mb-2" />
                                                        <p className="font-semibold text-sm">Take Photo</p>
                                                        <p className="text-xs text-slate-400">Mobile Only</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-4">
                                            <Label className="font-semibold">Location Details</Label>
                                            <div className="relative h-48 bg-slate-100 rounded-xl flex items-center justify-center overflow-hidden border border-slate-200">
                                                <div className="flex flex-col items-center text-slate-400">
                                                    <MapPin className="h-8 w-8 text-blue-500 mb-1" />
                                                    <p className="text-xs font-medium uppercase tracking-tight">
                                                        {formData.coordinates.lat ? `${formData.coordinates.lat.toFixed(4)}, ${formData.coordinates.lng?.toFixed(4)}` : "No GPS Data"}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <Button
                                                    type="button"
                                                    disabled={detecting}
                                                    onClick={detectLocation}
                                                    className="bg-blue-600 hover:bg-blue-700 px-6"
                                                >
                                                    {detecting ? <Loader2 className="animate-spin h-4 w-4" /> : <Target className="mr-2 h-4 w-4" />}
                                                    {detecting ? "Locating..." : "Detect"}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <div className="flex items-center justify-center gap-4 py-4">
                                    <Button type="button" variant="ghost" className="font-bold text-slate-600">Save as Draft</Button>
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="bg-blue-600 hover:bg-blue-700 px-12 py-6 rounded-xl text-lg font-bold shadow-lg shadow-blue-200 min-w-[240px]"
                                    >
                                        {loading ? <Loader2 className="animate-spin mr-2 h-5 w-5" /> : "Submit Complaint"}
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <Card className="bg-blue-50 border-none">
                                    <CardContent className="p-6">
                                        <Lightbulb className="text-blue-600 h-8 w-8 mb-4" />
                                        <h3 className="text-blue-900 font-bold text-lg mb-2">Quick Tips</h3>
                                        <p className="text-blue-800/70 text-sm leading-relaxed">
                                            Clear photos and precise locations help us fix issues up to 40% faster.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-sm">
                                    <CardHeader><CardTitle className="text-lg">Submission Status</CardTitle></CardHeader>
                                    <CardContent className="space-y-6">
                                        <StatusStep number="1" label="Details Entered" active={!!formData.category && !!formData.description} />
                                        <StatusStep number="2" label="Department Routing" />
                                        <StatusStep number="3" label="Resolution" />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

const StatusStep = ({ number, label, active = false }: { number: string; label: string; active?: boolean }) => (
    <div className="flex items-center gap-4 relative">
        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 z-10 transition-colors
      ${active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 border'}`}>
            {number}
        </div>
        <span className={`text-sm font-medium transition-colors ${active ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>
            {label}
        </span>
        {number !== "3" && (
            <div className="absolute left-[15px] top-8 w-[2px] h-6 bg-slate-100 -z-0" />
        )}
    </div>
);

export default CreateComplaint;