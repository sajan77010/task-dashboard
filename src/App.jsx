import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <Routes>
          <Route path="/"
           element={<Dashboard />} />
          {/* Add other routes here later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;