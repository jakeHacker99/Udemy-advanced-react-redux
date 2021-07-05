import React from "react";
import Header from "./Header";

const App = ({ children }) => {
  return (
    <div>
      <Header />
      <h2> {children} </h2>
    </div>
  );
};

export default App;
