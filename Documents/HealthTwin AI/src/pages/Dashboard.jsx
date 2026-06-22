import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

import {
    Heart,
    Scale,
    Flame,
    Droplets,
    Moon,
    Beef,
    Calendar
} from "lucide-react";

function Dashboard() {

    const [result, setResult] = useState(null);

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("healthResult")
        );

        setResult(data);

    }, []);

    if (!result) {

        return (

            <>
                <Navbar />

                <div className="dashboard">

                    <h1>Loading...</h1>

                </div>

            </>

        );

    }

    return (

        <>

            <Navbar />

            <div className="dashboard container">

                <h1>

                    👋 Welcome to HealthTwin

                </h1>

                <p className="dashboard-subtitle">

                    Here's your AI generated health report.

                </p>

                <div className="dashboard-grid">

                    <StatCard

                        icon={<Heart />}

                        title="Health Score"

                        value={result.health_score}

                        unit="%"

                        color="#ff5b7f"

                    />

                    <StatCard

                        icon={<Scale />}

                        title="BMI"

                        value={result.bmi}

                        color="#00d4ff"

                    />

                    <StatCard

                        icon={<Flame />}

                        title="Calories"

                        value={result.daily_calories}

                        unit="kcal"

                        color="#ff9f43"

                    />
                    <StatCard
    icon={<Beef />}
    title="Protein Goal"
    value={result.protein_goal}
    unit="g"
/>
                     <StatCard
    icon={<Droplets />}
    title="Water Goal"
    value={result.water_goal}
    unit="L"
    color="#38bdf8"
/>
<StatCard
    icon={<Moon />}
    title="Sleep"
    value={result.sleep}
    unit="hrs"
    color="#8b5cf6"
/>
{result.next_period && (

<StatCard
    icon={<Calendar />}
    title="Next Period"
    value={result.next_period}
    color="#ec4899"
/>

)}
            

                </div>
                 <div className="glass" style={{ padding: "25px", marginTop: "30px" }}>
    <h2>🤖 AI Health Coach</h2>

    <div
        style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
            marginTop: "15px",
            color: "#e2e8f0"
        }}
    >
        {result.ai_recommendation}
    </div>
</div>

            </div>

        </>

    );

}

export default Dashboard;