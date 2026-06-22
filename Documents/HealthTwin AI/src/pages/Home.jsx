import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import human from "../assets/images/human.png";

function Home() {

    const navigate = useNavigate();

    return (

        <>

        <Navbar />

        <section className="home">

            <div className="left">

                <h1 className="title">

                    Health<span>Twin</span>

                </h1>

                <h2 className="heading">

                    Your AI Powered

                    <br />

                    Digital Health Twin

                </h2>

                <p className="description">

                    Create your intelligent digital health twin to

                    monitor your wellness, predict future health,

                    analyze skin, track menstrual health,

                    chat with AI and simulate your future lifestyle.

                </p>

                <div className="hero-buttons">

                    <button

                        className="btn"

                        onClick={() => navigate("/create-twin")}

                    >

                        Create My Twin

                    </button>

                    <button

                        className="btn-outline"

                        onClick={() => navigate("/dashboard")}

                    >

                        View Dashboard

                    </button>

                </div>

                <div className="features">

                    <div className="card">

                        <h3>🧬 AI Health Twin</h3>

                        <p>

                            Create your personalized

                            digital health twin.

                        </p>

                    </div>

                    <div className="card">

                        <h3>📸 AI Skin Analysis</h3>

                        <p>

                            Upload a selfie and receive

                            AI-powered skincare insights.

                        </p>

                    </div>

                    <div className="card">

                        <h3>🤖 AI Health Coach</h3>

                        <p>

                            Ask anything related to

                            health, fitness or diet.

                        </p>

                    </div>

                    <div className="card">

                        <h3>📈 Health Simulator</h3>

                        <p>

                            Predict how today's habits

                            affect tomorrow's health.

                        </p>

                    </div>

                </div>

            </div>

            <div className="right">

                <img

                    src={human}

                    className="human-img"

                    alt="HealthTwin"

                />

            </div>

        </section>

        </>

    );

}

export default Home;