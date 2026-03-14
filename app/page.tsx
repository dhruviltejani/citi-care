import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/app/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  BarChart3,
  Users,
  CheckCircle2,
  Send,
  Search,
  ShieldCheck,
  Globe,
  Menu
} from 'lucide-react';
import { Footer } from "@/components/app/Footer";

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <Card className="border-none shadow-sm hover:shadow-md transition-all bg-slate-50/50 hover:-translate-y-1">
    <CardContent className="pt-8 pb-8">
      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const Step = ({
  icon,
  label,
  desc,
  isActive = false
}: {
  icon: React.ReactNode,
  label: string,
  desc: string,
  isActive?: boolean
}) => (
  <div className="flex flex-col items-center flex-1 z-10">
    <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-md transition-transform hover:scale-105 ${isActive ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white'
      }`}>
      {icon}
    </div>
    <h4 className="font-bold text-slate-900 mb-1">{label}</h4>
    <p className="text-[13px] text-slate-500 leading-snug max-w-[180px]">
      {desc}
    </p>
  </div>
);
// --- Main Page Component ---

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-20 py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-100 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 mr-2" />
              Official Government Portal
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              Report Civic Issues <br />
              in Your <span className="text-blue-600">City</span> Easily
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Help us keep our neighborhoods clean and safe. Report road damage,
              uncollected garbage, or faulty street lights in seconds.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-md shadow-lg shadow-blue-200">
                <Zap className="w-5 h-5 mr-2 fill-current" /> Report an Issue
              </Button>
              <Button size="lg" variant="outline" className="px-10 h-14 text-md border-slate-200 hover:bg-slate-50">
                View Live Map
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-[12px] border-slate-900 bg-slate-900 ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000"
                alt="Modern City Skyline"
                className="w-full h-[400px] object-cover opacity-90 transition-transform hover:scale-105 duration-700"
              />
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-100 bg-slate-50/40">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Complaints Resolved", value: "12.5k+", color: "text-blue-600" },
              { label: "Active Issues", value: "890", color: "text-emerald-500" },
              { label: "Registered Citizens", value: "45k+", color: "text-blue-600" },
              { label: "Avg. Response Time", value: "24h", color: "text-blue-600" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className={`text-4xl font-black tracking-tight ${stat.color}`}>{stat.value}</div>
                <div className="text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Platform Features</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Designed to empower citizens and streamline city maintenance through digital innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-blue-600" />}
            title="Report Issues Quickly"
            desc="Use our intuitive interface to upload photos and pinpoint exact GPS locations of issues in under 30 seconds."
          />
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6 text-emerald-500" />}
            title="Track Complaint Status"
            desc="Receive real-time notifications as your report moves from submission to assignment and final resolution."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6 text-blue-600" />}
            title="Improve Infrastructure"
            desc="Contribute to long-term planning. Your data helps authorities prioritize major development projects."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">How It Works</h2>
        <p className="text-slate-500 mb-20 max-w-2xl mx-auto">
          A transparent 4-step process to ensure every concern is addressed efficiently:
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line - Perfectly centered behind the circles */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-slate-100 -z-0" />

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
            <Step
              icon={<Users className="w-6 h-6" />}
              label="Register"
              desc="Create your citizen account with valid ID"
            />
            <Step
              icon={<Send className="w-6 h-6" />}
              label="Submit"
              desc="Upload details and location of the issue"
            />
            <Step
              icon={<Search className="w-6 h-6" />}
              label="Review"
              desc="Authorities verify and assign a task team"
            />
            <Step
              icon={<CheckCircle2 className="w-6 h-6" />}
              label="Resolved"
              desc="Problem is fixed and verified by you"
              isActive={true} // This makes the last one Green
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}