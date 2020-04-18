import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Tech from "./pages/Tech";
import ContactInfo from "./pages/ContactInfo";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path={["/", "react-portfolio"]} component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/tech" component={Tech} />
          <Route exact path="/contact-info" component={ContactInfo} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
