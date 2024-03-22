import "./App.css";
import "@freee_jp/vibes/css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfileCard } from "./components/ProfileCard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<ProfileCard />} />
      </Routes>
    </Router>
  );
}

export default App;
