import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Villas from "./pages/Villas";
import Vehicles from "./pages/Vehicles";
import Guides from "./pages/Guides";
function App() {
  return (
    <Router>
      <div className="App">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/guides" element={<Guides />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
