import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ClientDashboard from "./pages/ClientDashboard";
import SMHDashboard from "./pages/SMHDashboard";
import AiInsights from "./pages/AiInsights";
import Analytics from "./pages/Analytics";
import Clients from "./pages/Clients";
import ContentQueue from "./pages/ContentQueue";
import Scheduler from "./pages/Scheduler";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/smh" element={<SMHDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/scheduler-client" element={<Scheduler />} />
        <Route path="/analytics-client" element={<Analytics />} />
        <Route path="/ai-insights" element={<AiInsights />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/content-queue" element={<ContentQueue />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;