import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-wrapper">
        <SearchEngine defaultCity="Tokyo" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
