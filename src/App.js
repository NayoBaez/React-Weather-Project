import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchEngine defaultCity="Tokyo" />
      <Footer />
    </div>
  );
}

export default App;
