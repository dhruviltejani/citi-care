"use client";
import { 
  Plus, 
  FileText, 
  Clock, 
  RefreshCcw, 
  CheckCircle2, 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import CitizenSidebar from "@/components/app/citizen/CitizenSidebar";
import CitizenNavbar from "@/components/app/citizen/CitizenNavbar";

const Dashboard = () => {
  const stats = [
    { label: "TOTAL", value: "128", sub: "Total Complaints", icon: <FileText className="text-slate-500" />, color: "bg-slate-100" },
    { label: "PENDING", value: "12", sub: "Awaiting Review", icon: <Clock className="text-amber-500" />, color: "bg-amber-100" },
    { label: "PROGRESS", value: "24", sub: "Under Investigation", icon: <RefreshCcw className="text-blue-500" />, color: "bg-blue-100" },
    { label: "RESOLVED", value: "92", sub: "Successfully Closed", icon: <CheckCircle2 className="text-emerald-500" />, color: "bg-emerald-100" },
  ];

  const complaints = [
    { id: "#CMP-7821", category: "Public Works", date: "Oct 24, 2023", status: "Pending" },
    { id: "#CMP-7804", category: "Waste Management", date: "Oct 22, 2023", status: "In Progress" },
    { id: "#CMP-7798", category: "Urban Planning", date: "Oct 20, 2023", status: "Resolved" },
    { id: "#CMP-7756", category: "Public Safety", date: "Oct 18, 2023", status: "Rejected" },
    { id: "#CMP-7742", category: "Healthcare", date: "Oct 15, 2023", status: "Resolved" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/50">
      <CitizenSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <CitizenNavbar title="Dashboard" />

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-8 max-w-7xl mx-auto w-full overflow-y-auto">
          
          {/* Hero Banner */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white flex justify-between items-center shadow-lg shadow-blue-100">
            <div>
              <h2 className="text-2xl font-bold mb-2">Need to report an issue?</h2>
              <p className="text-blue-100 max-w-md">
                Submit a formal complaint to the relevant department and track its status in real-time.
              </p>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-6 h-auto rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95">
              <Plus className="mr-2 h-5 w-5" /> Create New Complaint
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2.5 rounded-xl ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{stat.label}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
                    <p className="text-sm text-slate-500 font-medium">{stat.sub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Complaints Table */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between border-b px-6 py-4">
              <CardTitle className="text-lg font-bold text-slate-800">Recent Complaints</CardTitle>
              <Button variant="link" className="text-blue-600 font-semibold p-0 h-auto hover:no-underline">View All</Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50/50 hover:bg-transparent">
                    <TableHead className="w-[150px] font-bold py-4 px-6 text-slate-500">COMPLAINT ID</TableHead>
                    <TableHead className="font-bold text-slate-500">CATEGORY</TableHead>
                    <TableHead className="font-bold text-slate-500">DATE</TableHead>
                    <TableHead className="font-bold text-slate-500">STATUS</TableHead>
                    <TableHead className="text-right font-bold py-4 px-6 text-slate-500">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complaints.map((item) => (
                    <TableRow key={item.id} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="font-semibold text-slate-700 px-6">{item.id}</TableCell>
                      <TableCell className="text-slate-600 font-medium">{item.category}</TableCell>
                      <TableCell className="text-slate-500">{item.date}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={cn("px-3 py-1 rounded-full font-semibold text-xs", getStatusStyles(item.status))}>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right px-6">
                        <Button variant="link" className="text-blue-600 h-auto p-0 font-bold hover:no-underline">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

// Helper for status colors
const getStatusStyles = (status:string) => {
  switch (status) {
    case "Pending": return "bg-amber-100 text-amber-700 hover:bg-amber-100 border-none shadow-none";
    case "In Progress": return "bg-blue-100 text-blue-700 hover:bg-blue-100 border-none shadow-none";
    case "Resolved": return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none shadow-none";
    case "Rejected": return "bg-red-100 text-red-700 hover:bg-red-100 border-none shadow-none";
    default: return "";
  }
};

export default Dashboard;