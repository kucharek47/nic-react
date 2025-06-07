import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/style.css';
import Layout from "./components/Layout";
import Home from "./podstrony/Home";
import NicBank from "./podstrony/NicBank";
import NicFizyka from "./podstrony/NicFizyka";
import NicNierobienie from "./podstrony/NicNierobienie";
import Autor from "./podstrony/autor";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nic_bank" element={<NicBank />} />
          <Route path="/nic_fizyka" element={<NicFizyka />} />
          <Route path="/nic_nierobienie" element={<NicNierobienie />} />
          <Route path="/autor" element={<Autor />} />
        </Routes>
      </Layout>
    </Router>
  );
}
