import React from "react";
import {
    Globe,
    Instagram,
    Twitter,
    ShieldCheck
} from "lucide-react";

export const Footer = () => {
    return (
        <footer className="pt-24 pb-12 border-t border-slate-100">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-2 font-bold text-2xl text-blue-600">
                        <ShieldCheck className="w-8 h-8" />
                        CitiCare
                    </div>
                    <p className="text-slate-500 text-md leading-relaxed max-w-sm">
                        Empowering communities through digital accountability. Working together for a smarter, cleaner city environment.
                    </p>
                    <div className="flex gap-5 text-slate-400">
                        <Globe className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors" />
                        <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors" />
                        <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors" />
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-900">Company</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">About Us</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">Our Services</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-900">Support</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">Help Center</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">API Docs</li>
                        <li className="hover:text-blue-600 cursor-pointer transition-colors">System Status</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
                <p className="text-xs">© 2026 CitizenCare System. All rights reserved.</p>
                <p className="text-xs">Managed by Department of Public Works.</p>
            </div>
        </footer>
    )
}