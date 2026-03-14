"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Mail,
    Phone,
    MapPin,
    Send
} from 'lucide-react';
import Navbar from '@/components/app/Navbar';
import { Footer } from '@/components/app/Footer';

export default function ContactSupport() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Form Submitted:", formData);
        alert("Thank you! Your message has been sent to our Vadodara support team.");

        setFormData({
            fullName: "",
            email: "",
            subject: "General Inquiry",
            message: ""
        });
    };

    return (
        <div className="min-h-screen bg-slate-50/30 font-sans">
            <Navbar />

            <div className="max-w-6xl mx-auto py-16 px-6">
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Contact Support
                    </h1>
                    <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
                        Have a question or technical issue? Our dedicated support team is here to
                        assist you with the <span className="font-semibold text-blue-600">Citizen Complaint System</span>.
                    </p>
                </header>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Contact Methods */}
                    <div className="lg:col-span-4 space-y-4">
                        <ContactInfoCard
                            icon={<Mail className="w-5 h-5 text-blue-600" />}
                            title="Email Us"
                            detail="Typically responds within 24 hours."
                            action="support@citizenportal.gov.in"
                            isLink
                        />
                        <ContactInfoCard
                            icon={<Phone className="w-5 h-5 text-blue-600" />}
                            title="Call Us"
                            detail="Mon-Sat, 10am - 6pm IST."
                            action="+91 265-2433111"
                            isLink
                        />
                        <ContactInfoCard
                            icon={<MapPin className="w-5 h-5 text-blue-600" />}
                            title="Vadodara Office"
                            detail="VMC Head Office, Khanderao Market"
                            action="Rajmahal Road, Vadodara, 390001"
                        />
                    </div>

                    {/* Right Column: Form */}
                    <Card className="lg:col-span-8 border-none shadow-xl shadow-slate-200/50 bg-white">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-8 text-slate-900">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input
                                            id="fullName"
                                            required
                                            placeholder="Enter your name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="bg-slate-50/50 border-slate-200 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="bg-slate-50/50 border-slate-200 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <select
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Technical Issue">Technical Issue</option>
                                        <option value="Report Verification">Report Verification</option>
                                        <option value="VMC Related">VMC Specific Query</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        required
                                        placeholder="How can our Vadodara team help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="min-h-[150px] bg-slate-50/50 border-slate-200 focus:ring-blue-500"
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-md font-semibold text-white shadow-lg transition-all active:scale-[0.98]">
                                    <Send className="w-4 h-4 mr-2" /> Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Map Section */}
                <section className="mt-16">
                    <div className="flex items-center gap-2 mb-6">
                        <MapPin className="w-5 h-5 text-blue-600 fill-current" />
                        <h2 className="font-bold text-slate-900 text-xl">Our Vadodara Location</h2>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-inner border border-slate-200 h-[450px] relative group bg-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.565814144535!2d73.19047977533633!3d22.294451079691456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f615456f91%3A0x89980d293883389a!2sKhanderao%20Market!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className="w-full h-full border-0 grayscale-[10%] contrast-[1.1] opacity-90 group-hover:opacity-100 transition-opacity"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute bottom-6 left-6 bg-white p-5 rounded-xl shadow-2xl border border-slate-100 max-w-[280px] hidden sm:block">
                            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">VMC Citizen Services</p>
                            <p className="text-sm font-semibold text-slate-800 leading-tight">
                                Khanderao Market Building,<br />
                                Rajmahal Road, Vadodara,<br />
                                Gujarat 390001
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}

function ContactInfoCard({ icon, title, detail, action, isLink = false }: any) {
    return (
        <Card className="border-none shadow-sm hover:shadow-md transition-all bg-white group cursor-default">
            <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl transition-colors group-hover:bg-blue-100">
                    {icon}
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 leading-tight">{title}</h3>
                    <p className="text-xs text-slate-500 mb-2 mt-0.5">{detail}</p>
                    <p className={`text-sm font-bold tracking-tight ${isLink ? 'text-blue-600 hover:underline cursor-pointer' : 'text-slate-700'}`}>
                        {action}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}