import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import "./default.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <h3>Ecom React Redux, GraphQL, Firebase</h3>
        <button>click to run coolest app ever</button>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
