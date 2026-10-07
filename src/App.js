import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/components/Header";
import Home from "./pages/Home";
import Villas from "./pages/Villas";
import Vehicles from "./pages/Vehicles";
import Guides from "./pages/Guides";
import About from "./pages/About";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contacts" element={<Contacts />} />
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
