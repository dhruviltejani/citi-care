
interface createComplaintFormData {
    category: string;
    description: string;
    coordinates: {
        lat: number | null;
        lng: number | null;
    };
    image: string | null;
}

export const createComplaint = async (formData: createComplaintFormData) => {
    try {
        const response = await fetch("http://localhost:3000/api/v1/complaint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        return data;
    } catch (error: any) {
        console.log("error:", error.message)
        return { success: false, message: error.message }
    }
}