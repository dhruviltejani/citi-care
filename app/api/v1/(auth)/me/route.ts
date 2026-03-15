import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/backend/verifyToken";

export const GET = async (req: Request) => {
    try {

        const user = await getCurrentUser(req);

        if (!user) {
            return NextResponse.json(
                { error: "Unauthenticated" },
                { status: 401 }
            );
        }

        const { name, email } = user;

        return NextResponse.json(
            { name, email },
            { status: 200 }
        );

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
};