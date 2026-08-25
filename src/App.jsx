import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Simulador from "./pages/Simulador";
import Analises from "./pages/Analises";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/analises" element={<Analises />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;