import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CreatingTwin() {

    const navigate = useNavigate();

    const [progress, setProgress] = useState(0);

    const [message, setMessage] = useState("Collecting Health Data...");

    useEffect(() => {

        const steps = [

            { progress: 20, text: "🧬 Collecting Health Data..." },

            { progress: 40, text: "⚖ Calculating BMI..." },

            { progress: 60, text: "🤖 AI Health Analysis..." },

            { progress: 80, text: "📊 Building Dashboard..." },

            { progress: 100, text: "✅ HealthTwin Ready!" }

        ];

        let index = 0;

        const interval = setInterval(() => {

            setProgress(steps[index].progress);

            setMessage(steps[index].text);

            index++;

            if (index === steps.length) {

                clearInterval(interval);

                setTimeout(() => {

                    navigate("/dashboard");

                }, 1000);

            }

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <>

            <Navbar />

            <div className="creating-page">

                <div className="glass creating-card">

                    <div className="dna-icon">

                        🧬

                    </div>

                    <h1>Creating Your Digital Health Twin</h1>

                    <p>{message}</p>

                    <div className="progress-bar">

                        <div

                            className="progress-fill"

                            style={{

                                width: `${progress}%`

                            }}

                        ></div>

                    </div>

                    <h2>{progress}%</h2>

                </div>

            </div>

        </>

    );

}

export default CreatingTwin;