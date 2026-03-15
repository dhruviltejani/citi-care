import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface JwtPayload {
    id: string;
    name: string;
    email: string;
}

export const getCurrentUser = async (req: Request) => {
    try {

        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) return null;

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as JwtPayload;

        return {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email
        };

    } catch {
        return null;
    }
};