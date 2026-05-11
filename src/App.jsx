import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ClientDashboard from "./pages/ClientDashboard";
import SMHDashboard from "./pages/SMHDashboard";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Client Dashboard */}
        <Route
          path="/ClientDashboard"
          element={<ClientDashboard />}
        />

        {/* SMH Dashboard */}
        <Route
          path="/smh"
          element={<SMHDashboard />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;