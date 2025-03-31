import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComplimentGenerator from "./components/ComplimentGenerator/ComplimentGenerator";
import BestComplimentPage from "./components/BestComplimentPage/BestComplimentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComplimentGenerator />} />
        <Route path="/best" element={<BestComplimentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
