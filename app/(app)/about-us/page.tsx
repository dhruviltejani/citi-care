import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    CheckCircle2,
    ShieldCheck,
    XCircle,
    Zap,
    TrendingUp,
    PieChart
} from 'lucide-react';
import Navbar from '@/components/app/Navbar';
import { Footer } from '@/components/app/Footer';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
            <Navbar />
            {/* Header Section */}
            <section className="bg-slate-950 text-white py-24 md:py-32 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <Badge variant="outline" className="bg-blue-600/10 text-blue-400 border-blue-500/30 mb-6 px-4 py-1 rounded-full">
                        Transparency & Governance
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                        About Our Platform
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                        Empowering every citizen to be a catalyst for change in their local community through digital accountability.
                    </p>
                </div>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                />
            </section>

            {/* Mission Section */}
            <section className="container mx-auto px-6 py-24 md:py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900">Our Mission</h2>
                        <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Bridging the gap between citizens and government services through transparency and efficiency.
                                We believe that a responsive government starts with an empowered citizenry.
                            </p>
                            <p>
                                Our platform provides a digital bridge, ensuring that every complaint is not just a data point,
                                but a call to action. We are committed to making public service accountability the standard.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 p-5 rounded-2xl bg-blue-50/50 border border-blue-100/50 max-w-md">
                            <div className="bg-blue-600 rounded-full p-2 shadow-lg shadow-blue-200">
                                <ShieldCheck className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">Verified Reporting</p>
                                <p className="text-sm text-slate-500">Authenticated submissions for real impact.</p>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Illustration */}
                    <div className="relative group">
                        <div className="aspect-square rounded-[3rem] bg-[#fdf8ed] flex items-center justify-center p-8 md:p-16 shadow-inner">
                            <div className="w-full h-full bg-emerald-50/50 rounded-3xl border border-emerald-100 relative flex items-center justify-center overflow-hidden">
                                <div className="w-4/5 h-3/5 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 space-y-4 transform group-hover:translate-y-[-5px] transition-transform duration-500">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                    </div>
                                    <div className="h-4 w-full bg-slate-50 rounded-md" />
                                    <div className="h-4 w-2/3 bg-slate-50 rounded-md" />
                                    <div className="pt-4 flex justify-between items-end">
                                        <div className="space-y-2 w-1/2">
                                            <div className="h-2 w-full bg-blue-100 rounded" />
                                            <div className="h-2 w-3/4 bg-blue-100 rounded" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floating Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl" />
                    </div>
                </div>
            </section>

            {/* Blue Stats Bar */}
            <section className="bg-blue-600 py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-white text-center">
                        <StatBlock value="45k+" label="Issues Reported" />
                        <StatBlock value="92%" label="Resolution Rate" />
                        <StatBlock value="120+" label="Depts Connected" />
                        <StatBlock value="2.4m" label="Citizens Served" />
                    </div>
                </div>
            </section>

            {/* Challenge & Solution Section */}
            <section className="bg-slate-50/50 py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight">The Challenge & Our Solution</h2>
                        <p className="text-slate-500 text-lg">Transforming public frustration into civic action.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Challenge Card */}
                        <Card className="border-none shadow-sm hover:shadow-md transition-all">
                            <CardContent className="p-10">
                                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-8">
                                    <XCircle className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-8">Traditional Roadblocks</h3>
                                <ul className="space-y-6">
                                    <ListItem text="Complex bureaucratic processes to file a simple complaint." type="negative" />
                                    <ListItem text="Zero visibility into status once a report is submitted." type="negative" />
                                    <ListItem text="Inefficient communication between departments." type="negative" />
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Solution Card */}
                        <Card className="border-none shadow-2xl shadow-blue-200 bg-blue-600 text-white transform md:scale-105">
                            <CardContent className="p-10">
                                <div className="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-8">
                                    <Zap className="w-7 h-7 fill-current" />
                                </div>
                                <h3 className="text-2xl font-bold mb-8 text-white">The GovReport Way</h3>
                                <ul className="space-y-6">
                                    <ListItem text="3-step digital reporting via mobile or desktop." type="positive" />
                                    <ListItem text="Real-time status tracking with automated updates." type="positive" />
                                    <ListItem text="Direct API integration with municipal service departments." type="positive" />
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-6 py-24 md:py-32">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-[#2D4F5E] rounded-[2rem] aspect-[4/5] p-8 flex flex-col justify-end text-white shadow-xl">
                            <div>
                                <h4 className="text-3xl font-black italic opacity-20 mb-2">TEAM</h4>
                                <p className="font-bold text-lg">Visionary Leadership</p>
                                <p className="text-xs opacity-60 uppercase tracking-widest mt-1">Founding Member</p>
                            </div>
                        </div>
                        <div className="bg-[#2A8E8E] rounded-[2rem] aspect-[4/5] p-8 flex flex-col justify-center items-center text-white shadow-xl translate-y-8">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                                <PieChart className="w-10 h-10" />
                            </div>
                            <h4 className="font-bold text-xl">Data Science</h4>
                            <p className="text-xs opacity-60 uppercase tracking-widest mt-2">Core Operations</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold tracking-tight">Driving Civic Innovation</h2>
                        <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                            <p>
                                GovReport is a non-partisan initiative backed by a consortium of city planners and software engineers. We leverage modern technology to solve age-old infrastructure problems.
                            </p>
                            <p>
                                We operate on the principles of <strong>Open Data</strong>. By making complaint trends public, we help city councils prioritize budgeting where it’s needed most.
                            </p>
                        </div>
                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-10 rounded-xl h-14 shadow-xl">
                            Join Our Initiative
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

// Refined Helper Components
const StatBlock = ({ value, label }: { value: string, label: string }) => (
    <div className="space-y-2">
        <div className="text-4xl md:text-5xl font-black tracking-tighter">{value}</div>
        <div className="text-[11px] uppercase tracking-[0.2em] opacity-70 font-bold">{label}</div>
    </div>
);

const ListItem = ({ text, type }: { text: string, type: 'positive' | 'negative' }) => (
    <li className="flex gap-4 items-start">
        <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${type === 'positive' ? 'bg-blue-200' : 'bg-red-400'
            }`} />
        <span className={`text-sm md:text-base leading-tight ${type === 'positive' ? 'text-white/90' : 'text-slate-600'}`}>
            {text}
        </span>
    </li>
);

export default AboutPage;