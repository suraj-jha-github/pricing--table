import React from "react";
import Organization from "./Organization";
import Professional from "./Professional";
import Starter from "./Starter";

function App() {
  return (
    <div className="app price-comparison">
      <Starter />
      <Professional/>
      <Organization />
    </div>
  );
}

export default App;
