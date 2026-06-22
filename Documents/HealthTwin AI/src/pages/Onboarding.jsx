import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { analyzeHealth } from "../services/api";

function Onboarding() {

    const navigate = useNavigate();

    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);

    const [userData, setUserData] = useState({
        name: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        sleep: "",
        water: "",
        lastPeriod: "",
        cycleLength: 28
    });

    const handleChange = (e) => {

        setUserData({

            ...userData,

            [e.target.name]: e.target.value

        });

    };

    const nextStep = () => {

        if(step === 7 && userData.gender === "male"){

            setStep(10);

            return;

        }

        setStep(step + 1);

    };

    const previousStep = () => {

        if(step > 0){

            setStep(step - 1);

        }

    };

    const submitData = async () => {

        try{

            setLoading(true);

            const result = await analyzeHealth(userData);

            console.log("API Result :", result);

            localStorage.setItem(

                "healthResult",

                JSON.stringify(result)

            );

            navigate("/creating");

        }

        catch(error){

            console.error(error);

            alert("Health Analysis Failed!");

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <>

        <Navbar/>

        <div className="onboarding-page">

        <div className="glass onboarding-card">

        <div className="progress-bar">

        <div

        className="progress-fill"

        style={{

            width:`${((step+1)/10)*100}%`

        }}

        >

        </div>

        </div>

        <p className="step-text">

        Step {step+1} of 10

        </p>

        {/* Welcome */}

        {step===0 &&(

        <>

        <h1>👋 Welcome to HealthTwin</h1>

        <p>

        Let's create your AI Digital Health Twin.

        It will only take one minute.

        </p>

        <button

        className="btn"

        onClick={nextStep}

        >

        Get Started

        </button>

        </>

        )}

        {/* Name */}

        {step===1 &&(

        <>

        <h2>What's your name?</h2>

        <input

        type="text"

        name="name"

        value={userData.name}

        onChange={handleChange}

        placeholder="Enter your name"

        />

        <div className="step-buttons">

        <button

        className="btn-outline"

        onClick={previousStep}

        >

        Back

        </button>

        <button

        className="btn"

        disabled={!userData.name}

        onClick={nextStep}

        >

        Next

        </button>

        </div>

        </>

        )}

        {/* Age */}

        {step===2 &&(

        <>

        <h2>How old are you?</h2>

        <input

        type="number"

        name="age"

        value={userData.age}

        onChange={handleChange}

        placeholder="Enter your age"

        />

        <div className="step-buttons">

        <button

        className="btn-outline"

        onClick={previousStep}

        >

        Back

        </button>

        <button

        className="btn"

        disabled={!userData.age}

        onClick={nextStep}

        >

        Next

        </button>

        </div>

        </>

        )}
        {/* Gender */}

        {step===3 &&(

        <>

        <h2>Select your Gender</h2>

        <select
        name="gender"
        value={userData.gender}
        onChange={handleChange}
        >

            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>

        </select>

        <div className="step-buttons">

        <button className="btn-outline" onClick={previousStep}>
        Back
        </button>

        <button
        className="btn"
        disabled={!userData.gender}
        onClick={nextStep}
        >
        Next
        </button>

        </div>

        </>

        )}

        {/* Height */}

        {step===4 &&(

        <>

        <h2>Your Height (cm)</h2>

        <input
        type="number"
        name="height"
        value={userData.height}
        onChange={handleChange}
        placeholder="170"
        />

        <div className="step-buttons">

        <button className="btn-outline" onClick={previousStep}>
        Back
        </button>

        <button
        className="btn"
        disabled={!userData.height}
        onClick={nextStep}
        >
        Next
        </button>

        </div>

        </>

        )}

        {/* Weight */}

        {step===5 &&(

        <>

        <h2>Your Weight (kg)</h2>

        <input
        type="number"
        name="weight"
        value={userData.weight}
        onChange={handleChange}
        placeholder="60"
        />

        <div className="step-buttons">

        <button className="btn-outline" onClick={previousStep}>
        Back
        </button>

        <button
        className="btn"
        disabled={!userData.weight}
        onClick={nextStep}
        >
        Next
        </button>

        </div>

        </>

        )}

        {/* Sleep */}

        {step===6 &&(

        <>

        <h2>Sleep Hours</h2>

        <input
        type="number"
        name="sleep"
        value={userData.sleep}
        onChange={handleChange}
        placeholder="8"
        />

        <div className="step-buttons">

        <button className="btn-outline" onClick={previousStep}>
        Back
        </button>

        <button
        className="btn"
        disabled={!userData.sleep}
        onClick={nextStep}
        >
        Next
        </button>

        </div>

        </>

        )}

        {/* Water */}

        {step===7 &&(

        <>

        <h2>Daily Water Intake (L)</h2>

        <input
        type="number"
        step="0.5"
        name="water"
        value={userData.water}
        onChange={handleChange}
        placeholder="2.5"
        />

        <div className="step-buttons">

        <button className="btn-outline" onClick={previousStep}>
        Back
        </button>

        <button
        className="btn"
        disabled={!userData.water}
        onClick={nextStep}
        >
        Next
        </button>

        </div>

        </>

        )}

        {/* Last Period */}

        {step===8 && userData.gender==="female" &&(

        <>

        <h2>First Day of Last Period</h2>

        <input
        type="date"
        name="lastPeriod"
        value={userData.lastPeriod}
        onChange={handleChange}
        />

        <div className="step-buttons">

        <button className="btn-outline" onClick={previousStep}>
        Back
        </button>

        <button
        className="btn"
        disabled={!userData.lastPeriod}
        onClick={nextStep}
        >
        Next
        </button>

        </div>

        </>

        )}

        {/* Final */}

        {(step===10 || (step===9 && userData.gender==="female")) &&(

        <>

        {userData.gender==="female" && (

        <>

        <h2>Cycle Length</h2>

        <input
        type="number"
        name="cycleLength"
        value={userData.cycleLength}
        onChange={handleChange}
        />

        </>

        )}

        <h2 style={{marginTop:"20px"}}>

        Ready to Create Your HealthTwin 🚀

        </h2>

        <div className="step-buttons">

        <button
        className="btn-outline"
        onClick={previousStep}
        >
        Back
        </button>

        <button
        className="btn"
        onClick={submitData}
        >

        {loading ? "Creating..." : "Create HealthTwin"}

        </button>

        </div>

        </>

        )}

        </div>

        </div>

        </>

    );

}

export default Onboarding;