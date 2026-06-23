const BASE_URL = "https://healthtwin-ai-1.onrender.com";

// -------------------------------
// Health Analysis
// -------------------------------

export async function analyzeHealth(userData) {

    const response = await fetch(`${BASE_URL}/analyze`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(userData)

    });

    if (!response.ok) {
        throw new Error("Health Analysis Failed");
    }

    return await response.json();

}



// -------------------------------
// AI Chat
// -------------------------------

export async function sendMessage(message) {

    const response = await fetch(`${BASE_URL}/chat`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message
        })

    });

    if (!response.ok) {
        throw new Error("Chat Failed");
    }

    return await response.json();

}



// -------------------------------
// Skin Analysis
// -------------------------------

export async function analyzeSkin(image) {

    const formData = new FormData();

    formData.append("file", image);

    const response = await fetch(`${BASE_URL}/skin-analysis`, {

        method: "POST",

        body: formData

    });

    if (!response.ok) {
        throw new Error("Skin Analysis Failed");
    }

    return await response.json();

}
