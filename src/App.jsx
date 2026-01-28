import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import CallLogs from "./pages/CallLogs";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calls" element={<CallLogs />} />
          <Route path="/appointments" element={<Appointments />} />
          {/* Add other routes here later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
