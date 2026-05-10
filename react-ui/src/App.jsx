import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Clients from './pages/Clients';
import ContentQueue from './pages/ContentQueue';
import Scheduler from './pages/Scheduler';
import Analytics from './pages/Analytics';
import AIStudio from './pages/AIStudio';
import Settings from './pages/Settings';
import ClientDashboard from './pages/ClientDashboard';
import ClientAnalytics from './pages/ClientAnalytics';
import ClientScheduler from './pages/ClientScheduler';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Entry Point: Sign Up */}
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Agency Dashboard (SMH Dashboard) - accessible via separate URL */}
        <Route path="/smh-dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/content-queue" element={<ContentQueue />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/ai-studio" element={<AIStudio />} />
        <Route path="/settings" element={<Settings />} />

        {/* Client Portal - default after login */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/client/analytics" element={<ClientAnalytics />} />
        <Route path="/client/scheduler" element={<ClientScheduler />} />
        <Route path="/client/ai-insights" element={<AIStudio />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

