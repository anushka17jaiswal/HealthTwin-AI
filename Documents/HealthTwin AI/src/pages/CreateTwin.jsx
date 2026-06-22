import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CreateTwin() {

    const navigate = useNavigate();

    return (

        <>
            <Navbar />

            <div className="create-page">

                <div className="create-card glass">

                    <div className="twin-icon">

                        🧬

                    </div>

                    <h1>

                        Welcome to HealthTwin

                    </h1>

                    <h3>

                        Build your AI Digital Health Twin

                    </h3>

                    <p>

                        Answer a few health questions.

                        Our AI will analyze your body,

                        calculate BMI, estimate calories,

                        generate recommendations,

                        predict menstrual cycle,

                        and create your personalized

                        health dashboard.

                    </p>

                    <div className="create-features">

                        <div>✅ AI Health Analysis</div>

                        <div>✅ Skin Scanner</div>

                        <div>✅ AI Chatbot</div>

                        <div>✅ Health Prediction</div>

                    </div>

                    <button

                        className="btn"

                        onClick={() => navigate("/onboarding")}

                    >

                        Create My HealthTwin →

                    </button>

                    <small>

                        ⏱ Takes less than 90 seconds

                    </small>

                </div>

            </div>

        </>

    );

}

export default CreateTwin;