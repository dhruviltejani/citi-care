"use client";
import CitizenNavbar from "@/components/app/citizen/CitizenNavbar";
import CitizenSidebar from "@/components/app/citizen/CitizenSidebar";
import {
    Search,
    Filter,
    Calendar,
    ChevronLeft,
    ChevronRight,
    FileText,
    Clock,
    CheckCircle2,
    AlertCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ComplaintsList = () => {
    const summaryStats = [
        { label: "TOTAL FILED", value: "12", icon: <FileText className="text-blue-500" />, color: "bg-blue-50" },
        { label: "IN PROGRESS", value: "04", icon: <Clock className="text-orange-500" />, color: "bg-orange-50" },
        { label: "RESOLVED", value: "07", icon: <CheckCircle2 className="text-emerald-500" />, color: "bg-emerald-50" },
        { label: "REJECTED", value: "01", icon: <AlertCircle className="text-red-500" />, color: "bg-red-50" },
    ];

    const complaints = [
        { id: "#CMP-9201", category: "Road Maintenance", date: "Oct 24, 2023", dept: "Public Works", status: "Processing" },
        { id: "#CMP-8842", category: "Water Leakage", date: "Oct 20, 2023", dept: "Water Utility Dept.", status: "Resolved" },
        { id: "#CMP-8510", category: "Waste Management", date: "Oct 18, 2023", dept: "Sanitation Board", status: "Pending" },
        { id: "#CMP-8104", category: "Street Lights", date: "Oct 12, 2023", dept: "Electricity Dept.", status: "Resolved" },
        { id: "#CMP-7933", category: "Tree Trimming", date: "Oct 05, 2023", dept: "Urban Forestry", status: "Rejected" },
    ];

    return (

        <div className="flex h-screen overflow-hidden bg-slate-50/50">
            <CitizenSidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <CitizenNavbar title="My Complaint" />
                <div className="flex-1 bg-slate-50/30 p-8 space-y-8 overflow-y-auto">
                    {/* Top Stats Ribbon */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {summaryStats.map((stat, i) => (
                            <Card key={i} className="border border-slate-100 shadow-sm overflow-hidden">
                                <CardContent className="p-4 flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${stat.color}`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{stat.label}</p>
                                        <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Filterable Table Card */}
                    <Card className="border-none shadow-sm overflow-hidden">
                        <CardContent className="p-0">
                            {/* Toolbar */}
                            <div className="p-4 border-b flex flex-wrap items-center gap-3">
                                <div className="relative flex-1 min-w-[300px]">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <Input
                                        placeholder="Search by ID or keywords..."
                                        className="pl-10 bg-slate-50 border-slate-200"
                                    />
                                </div>

                                <Select>
                                    <SelectTrigger className="w-[160px] bg-slate-50">
                                        <SelectValue placeholder="All Categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Categories</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select>
                                    <SelectTrigger className="w-[130px] bg-slate-50">
                                        <SelectValue placeholder="All Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Status</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select>
                                    <SelectTrigger className="w-[160px] bg-slate-50">
                                        <Calendar className="mr-2 h-4 w-4 text-slate-400" />
                                        <SelectValue placeholder="Last 30 Days" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="30">Last 30 Days</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Button variant="outline" size="icon" className="bg-slate-50">
                                    <Filter className="h-4 w-4 text-slate-600" />
                                </Button>
                            </div>

                            {/* Table */}
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-white hover:bg-transparent">
                                        <TableHead className="text-[11px] font-bold text-slate-400 uppercase py-5 px-6">Complaint ID</TableHead>
                                        <TableHead className="text-[11px] font-bold text-slate-400 uppercase">Category</TableHead>
                                        <TableHead className="text-[11px] font-bold text-slate-400 uppercase">Date Filed</TableHead>
                                        <TableHead className="text-[11px] font-bold text-slate-400 uppercase">Department</TableHead>
                                        <TableHead className="text-[11px] font-bold text-slate-400 uppercase">Status</TableHead>
                                        <TableHead className="text-[11px] font-bold text-slate-400 uppercase text-right px-6">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {complaints.map((item) => (
                                        <TableRow key={item.id} className="hover:bg-slate-50/50 border-b border-slate-50">
                                            <TableCell className="font-bold text-slate-700 px-6">{item.id}</TableCell>
                                            <TableCell className="text-slate-600 font-medium">{item.category}</TableCell>
                                            <TableCell className="text-slate-500">{item.date}</TableCell>
                                            <TableCell className="text-slate-500">{item.dept}</TableCell>
                                            <TableCell>
                                                <Badge variant="secondary" className={getStatusBadgeStyles(item.status)}>
                                                    {item.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right px-6">
                                                <Button variant="link" className="text-blue-600 font-bold p-0 h-auto">View Details</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            {/* Pagination */}
                            <div className="p-4 border-t flex items-center justify-between text-sm text-slate-500">
                                <span>Showing <span className="font-bold text-slate-700">1 to 5</span> of <span className="font-bold text-slate-700">12</span> results</span>
                                <div className="flex items-center gap-1">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-slate-100">
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                    <Button size="icon" className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold">1</Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">2</Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">3</Button>
                                    <span className="px-2">...</span>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-slate-100">
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Support Banner */}
                    <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-xl shadow-blue-100 relative overflow-hidden">
                        <div className="relative z-10 max-w-xl text-center md:text-left">
                            <h2 className="text-2xl font-bold mb-2">Need Help with your Complaint?</h2>
                            <p className="text-blue-100 text-sm opacity-90 leading-relaxed">
                                Our citizen support center is available 24/7 to help you resolve issues and provide feedback on our services.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-6 md:mt-0 relative z-10">
                            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-6 rounded-xl">
                                Chat Support
                            </Button>
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl bg-white/5 backdrop-blur-sm">
                                Call 311
                            </Button>
                        </div>
                        {/* Subtle Background Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Style mapping for table badges
const getStatusBadgeStyles = (status: string) => {
    const base = "px-3 py-1 rounded-full text-[11px] font-bold border-none shadow-none ";
    switch (status) {
        case "Processing": return base + "bg-orange-100 text-orange-600";
        case "Resolved": return base + "bg-emerald-100 text-emerald-600";
        case "Pending": return base + "bg-blue-100 text-blue-600";
        case "Rejected": return base + "bg-red-100 text-red-600";
        default: return base + "bg-slate-100 text-slate-600";
    }
};

export default ComplaintsList;