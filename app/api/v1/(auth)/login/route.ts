import { NextResponse } from "next/server";
import { connectDB } from "@/database/connection";
import jwt from "jsonwebtoken";
import User from "@/database/models/user";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {

    await connectDB();

    try {

        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const normalizedEmail = email.toLowerCase();

        const user = await User.findOne({ email: normalizedEmail });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        const isPassword = await bcrypt.compare(password, user.password!);

        if (!isPassword) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            { id: user._id, name: user.name, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "7d" }
        );

        const response = NextResponse.json(
            { message: "Login successful" },
            { status: 200 }
        );

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;

    } catch (error: any) {
        return NextResponse.json(
            { error: "Internal server error", err: error.message },
            { status: 500 }
        );
    }
}