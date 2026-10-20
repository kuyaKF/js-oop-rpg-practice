
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Encounter from "./pages/Encounter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/encounter" element={<Encounter />} />
    </Routes>
  );
}

export default App;