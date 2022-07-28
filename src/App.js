import React from "react";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-wrapper">
        <SearchEngine />
        <div>
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
