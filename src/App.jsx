import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Beats from "./pages/Beats";
import Components from "./pages/Components";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> {" "}
        <Link to="/about">About</Link> {" "}
        <Link to="/profile">Profile</Link> {" "}
        <Link to="/beats">Beats</Link> {" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/beats" element={<Beats />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;