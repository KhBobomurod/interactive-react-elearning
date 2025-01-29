import React from "react";
// import pages
import AboutUs from "./pages/AbuotUs";
// import GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutUs />

    </div>
  );
}

export default App;
