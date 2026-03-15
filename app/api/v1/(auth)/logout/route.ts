import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const response = NextResponse.json(
            { message: "Logout successful" },
            { status: 200 }
        );

        response.cookies.delete("token");

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}