import { NextRequest, NextResponse } from "next/server";
import Complaint from "@/database/models/complaint";
import { connectDB } from "@/database/connection";
import { getCurrentUser } from "@/lib/backend/verifyToken";

export const POST = async (req: NextRequest) => {
    try {

        await connectDB();

        const user = await getCurrentUser(req);

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await req.json();

        const complaint = await Complaint.create({
            ...body,
            user: user.id,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Complaint created successfully",
                data: {
                    id: complaint._id,
                },
            },
            { status: 201 }
        );

    } catch (error: any) {

        console.error("Error creating complaint:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            { status: 500 }
        );
    }
};


export const GET = async (req: NextRequest) => {
    try {

        await connectDB();

        const user = await getCurrentUser(req);

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        const complaints = await Complaint
            .find({ user: user.id })
            .lean();

        const data = complaints.map((complaint: any) => ({
            id: complaint._id,
            title: complaint.title,
            description: complaint.description,
            category: complaint.category,
            status: complaint.status,
            createdAt: complaint.createdAt,
            updatedAt: complaint.updatedAt
        }));

        return NextResponse.json(
            {
                success: true,
                message: "Complaints fetched successfully",
                data
            },
            { status: 200 }
        );

    } catch (error: any) {

        console.error("Error fetching complaints:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            { status: 500 }
        );
    }
};