import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Router>
          <NavBar />
          <Container customClass="min-height">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/newproject" element={<NewProject />} />
              <Route path="/project/:id" element={<Project />} />
            </Routes>
          </Container>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
