import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingInquire from "./components/FloatingInquire";
import Home from "./pages/Home";
import CeladonVillage from "./pages/CeladonVillage";
import BriaHomes from "./pages/BriaHomes";
import ValleDulce from "./pages/ValleDulce";
import VenturaReal from "./pages/VenturaReal";
import AgapeyaTowns from "./pages/AgapeyaTowns";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celadon-village" element={<CeladonVillage />} />
          <Route path="/bria-homes-executive" element={<BriaHomes />} />
          <Route path="/valle-dulce" element={<ValleDulce />} />
          <Route path="/ventura-real" element={<VenturaReal />} />
          <Route path="/agapeya-towns" element={<AgapeyaTowns />} />
        </Routes>
      </main>
      <Footer />
      <FloatingInquire />
    </BrowserRouter>
  );
}
