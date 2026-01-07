import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import About from "./pages/About";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px" }}>
        <h1>Quietly Becoming</h1>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<Post />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
