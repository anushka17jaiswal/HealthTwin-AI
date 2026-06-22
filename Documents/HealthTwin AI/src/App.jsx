import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import CreateTwin from "./pages/CreateTwin";
import Onboarding from "./pages/Onboarding";
import CreatingTwin from "./pages/CreatingTwin";
import Dashboard from "./pages/Dashboard";
import SkinAnalysis from "./pages/SkinAnalysis";
import Simulator from "./pages/Simulator";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Create Twin */}
      <Route path="/create-twin" element={<CreateTwin />} />

      {/* Onboarding */}
      <Route path="/onboarding" element={<Onboarding />} />

      {/* AI Creating Animation */}
      <Route path="/creating" element={<CreatingTwin />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* AI Chatbot */}
      <Route path="/chat" element={<Chatbot />} />

      {/* Skin Analysis */}
      <Route path="/skin-analysis" element={<SkinAnalysis />} />

      {/* Health Simulator */}
      <Route path="/simulator" element={<Simulator />} />

      {/* Invalid Route */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;