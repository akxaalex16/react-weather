import React from "react";
import City from "./City";
import Footer from "./Footer";
import "./Footer.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <City defaultCity="Los Angeles" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
