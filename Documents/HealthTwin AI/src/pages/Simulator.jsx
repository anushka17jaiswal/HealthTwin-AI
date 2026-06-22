import { useState } from "react";
import Navbar from "../components/Navbar";
import { analyzeHealth } from "../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
function Simulator() {

    const [weight, setWeight] = useState(60);
    const [sleep, setSleep] = useState(7);
    const [water, setWater] = useState(2.5);
    const [protein, setProtein] = useState(65);
    const [exercise, setExercise] = useState(30);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSimulation = async () => {

    setLoading(true);

    try {

        const data = {
            name: "Simulator",
            age: 20,
            gender: "female",
            height: 165,
            weight: Number(weight),
            sleep: Number(sleep),
            water: Number(water),
            lastPeriod: "",
            cycleLength: 28
        };

        const response = await analyzeHealth(data);

        setResult(response);

    } catch (error) {

        console.error(error);

        alert("Simulation Failed");

    }

    setLoading(false);

};
const graphData = result
  ? [
      {
        week: "Current",
        score: Math.max(result.health_score - 15, 0)
      },
      {
        week: "Week 1",
        score: Math.max(result.health_score - 10, 0)
      },
      {
        week: "Week 2",
        score: Math.max(result.health_score - 6, 0)
      },
      {
        week: "Week 3",
        score: Math.max(result.health_score - 3, 0)
      },
      {
        week: "Week 4",
        score: result.health_score
      }
    ]
  : [];

    return (
        <>
            <Navbar />

            <div className="create-page">
                <div className="create-card">

                    <h1>🧠 Health Simulator</h1>

                    <p>
                        Adjust your lifestyle and see how your future health can improve.
                    </p>

                    <br />

                    <label>⚖️ Weight : {weight} kg</label>
                    <input
                        type="range"
                        min="40"
                        max="120"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />

                    <br /><br />

                    <label>😴 Sleep : {sleep} hrs</label>
                    <input
                        type="range"
                        min="4"
                        max="10"
                        step="0.5"
                        value={sleep}
                        onChange={(e) => setSleep(e.target.value)}
                    />

                    <br /><br />

                    <label>💧 Water : {water} L</label>
                    <input
                        type="range"
                        min="1"
                        max="5"
                        step="0.5"
                        value={water}
                        onChange={(e) => setWater(e.target.value)}
                    />

                    <br /><br />

                    <label>🥩 Protein : {protein} g</label>
                    <input
                        type="range"
                        min="20"
                        max="120"
                        value={protein}
                        onChange={(e) => setProtein(e.target.value)}
                    />

                    <br /><br />

                    <label>🏃 Exercise : {exercise} min</label>
                    <input
                        type="range"
                        min="0"
                        max="120"
                        step="10"
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}
                    />

                    <br /><br />

                    <button
    className="start-btn"
    onClick={handleSimulation}
>

    {loading ? "Simulating..." : "Simulate Future Health"}

</button>
{result && (

<div className="glass" style={{ marginTop: "30px", padding: "20px" }}>

    <h2>📊 Predicted Health Report</h2>

    <p>❤️ Health Score: {result.health_score}</p>

    <p>⚖️ BMI: {result.bmi}</p>

    <p>🔥 Calories: {result.daily_calories} kcal</p>

    <p>💪 Protein Goal: {result.protein_goal} g</p>

    <p>💧 Water Goal: {result.water_goal} L</p>

</div>


)}
{result && (

<div className="glass" style={{ marginTop: "30px", padding: "20px" }}>

    <h2>📈 Health Score Prediction</h2>

    <ResponsiveContainer width="100%" height={300}>

        <LineChart data={graphData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="week" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Line
                type="monotone"
                dataKey="score"
                stroke="#4fd1ff"
                strokeWidth={4}
            />

        </LineChart>

    </ResponsiveContainer>

</div>

)}
{result && (

<div
    className="glass"
    style={{
        marginTop: "30px",
        padding: "25px",
        textAlign: "left"
    }}
>

    <h2>🤖 AI Future Coach</h2>

    <p>
        Based on your simulated lifestyle, your predicted
        <strong> Health Score is {result.health_score}/100.</strong>
    </p>

    <br />

    <p>😴 Sleep: Maintain <strong>{sleep} hours</strong> daily.</p>

    <p>💧 Water: Drink at least <strong>{result.water_goal} L</strong> every day.</p>

    <p>💪 Protein: Aim for <strong>{result.protein_goal} g</strong> protein.</p>

    <p>🔥 Calories: Stay close to <strong>{result.daily_calories} kcal</strong> daily.</p>

    <br />

    <div
        style={{
            background: "#0ea5e9",
            color: "white",
            padding: "15px",
            borderRadius: "12px",
            fontWeight: "600"
        }}
    >
        🎯 If you consistently follow these habits, your overall health is expected to improve significantly over the next <strong>4–6 weeks.</strong>
    </div>

</div>

)}

                </div>
            </div>
        </>
    );
}

export default Simulator;