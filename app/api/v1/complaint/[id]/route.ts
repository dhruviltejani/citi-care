import { NextResponse, NextRequest } from "next/server";
import Complaint from "@/database/models/complaint";
import { connectDB } from "@/database/connection";
import { getCurrentUser } from "@/lib/backend/verifyToken";

export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {

        await connectDB();

        const user = await getCurrentUser(req);

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        const complaint = await Complaint.findOne({
            _id: params.id,
            user: user.id
        }).lean();

        if (!complaint) {
            return NextResponse.json(
                { success: false, message: "Complaint not found" },
                { status: 404 }
            );
        }

        const data = {
            complaintId: complaint._id.toString(),
            userId: complaint.user.toString(),
            title: complaint.title,
            description: complaint.description,
            category: complaint.category,
            status: complaint.status,
            createdAt: complaint.createdAt,
            updatedAt: complaint.updatedAt
        };

        return NextResponse.json(
            { success: true, data },
            { status: 200 }
        );

    } catch (error) {

        console.error("Error fetching complaint:", error);

        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
};


export const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {

        await connectDB();

        const user = await getCurrentUser(req);

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        const complaint = await Complaint.findOne({
            _id: params.id,
            user: user.id
        });

        if (!complaint) {
            return NextResponse.json(
                { success: false, message: "Complaint not found" },
                { status: 404 }
            );
        }

        await complaint.deleteOne();

        return NextResponse.json(
            {
                success: true,
                message: "Complaint deleted successfully",
                data: {
                    complaintId: params.id,
                    userId: user.id
                }
            },
            { status: 200 }
        );

    } catch (error) {

        console.error("Error deleting complaint:", error);

        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
};