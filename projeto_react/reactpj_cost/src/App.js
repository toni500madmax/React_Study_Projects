import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./app.css";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Router>
          <NavBar />
          <NavBar />
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newproject" element={<NewProject />} />
            </Routes>
          </Container>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
