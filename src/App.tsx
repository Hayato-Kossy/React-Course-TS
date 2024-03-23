import "./App.css";
import "@freee_jp/vibes/css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfileCard } from "./components/ProfileCard";
import { FruitsList } from "./components/FruitsList";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/fruitsList" element={<FruitsList />} />
      </Routes>
    </Router>
  );
}

export default App;
