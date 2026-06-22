import { useState } from "react";
import { analyzeSkin } from "../services/api";
import Navbar from "../components/Navbar";
function SkinAnalysis() {

    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState("");

    const [result, setResult] = useState("");

    const [loading, setLoading] = useState(false);

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);

        setPreview(URL.createObjectURL(file));

        setResult("");

    };

    const handleAnalyze = async () => {

        if (!image) {

            alert("Please upload an image first.");

            return;

        }

        setLoading(true);

        try {

            const response = await analyzeSkin(image);

            setResult(response.analysis);

        }

        catch (error) {

            console.error(error);

            setResult("❌ Skin analysis failed.");

        }

        setLoading(false);

    };
    return (
<>
    <Navbar />

    <div className="create-page">
            <div className="create-card glass">

                <h1>📸 AI Skin Analysis</h1>

                <p>
                    Upload a clear selfie and let HealthTwin AI analyze your skin.
                </p>

                <br />

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                />

                {preview && (

                    <div style={{ marginTop: "25px" }}>

                        <img
                            src={preview}
                            alt="Preview"
                            style={{
                                width: "250px",
                                borderRadius: "20px",
                                margin: "auto",
                                display: "block"
                            }}
                        />

                    </div>

                )}

                <br />

                <button
                    className="btn"
                    onClick={handleAnalyze}
                    disabled={loading}
                >

                    {loading ? "🔍 Analyzing..." : "Analyze Skin"}

                </button>

                {result && (

                    <div
                        className="glass"
                        style={{
                            marginTop: "35px",
                            padding: "25px",
                            textAlign: "left"
                        }}
                    >

                        <h2>🤖 AI Skin Report</h2>

                        <p
                            style={{
                                marginTop: "15px",
                                lineHeight: "1.8",
                                whiteSpace: "pre-wrap"
                            }}
                        >
                            {result}
                        </p>

                    </div>

                )}

            </div>

        </div>
        </>

    );

}

export default SkinAnalysis;