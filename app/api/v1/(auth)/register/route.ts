import { NextResponse } from "next/server";
import { connectDB } from "@/database/connection";
import User from "@/database/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {

    await connectDB();

    try {

        const body = await req.json();
        const { name, email, mobile, city, password } = body;

        if (!name || !email || !mobile || !city || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const normalizedEmail = email.toLowerCase();

        const isExist = await User.findOne({ email: normalizedEmail });

        if (isExist) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email: normalizedEmail,
            mobile,
            city,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { id: user._id, name: user.name, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "7d" }
        );

        const response = NextResponse.json(
            { success: true, message: "User registered successfully" },
            { status: 201 }
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