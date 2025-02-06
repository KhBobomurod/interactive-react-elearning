import React from "react";
// import pages
import AboutUs from "./pages/AbuotUs";
// import GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Courses from "./pages/Courses";
import ContactUS from "./pages/ContactUs";
// React Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
      <Route path="/" exact>
        <AboutUs />
      </Route>
      <Route path="/courses"  >
        <Courses />
      </Route>
      <Route path="/contact">
        <ContactUS />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
