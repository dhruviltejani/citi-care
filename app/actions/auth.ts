
const BASE_URL = "http://localhost:3000/api/v1";

interface registerFormData {
    name: string,
    email: string,
    mobile: string,
    city: string,
    password: string,
}

interface loginFormData {
    email: string,
    password: string,
}

export const registerUser = async (formData: registerFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log(error);
        return error.message
    }
}

export const loginUser = async (formData: loginFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log(error);
        return error.message
    }
}