import React from "react";
import { Fieldset } from "./components/fieldset";
import "./App.css";

function App() {
  // const data = {}
  const handleSubmit = () => {
    console.log("all input form values submitted to server");
  };
  const resetAllchanges = () => {
    console.log("all input form values are resetted");
  };
  return (
    <div className="App">
      <main>
        <h1>hi</h1>
        <form onSubmit={handleSubmit}>
          <Fieldset />
          <Fieldset />
          <span className="cta-container">
            <button type="reset" onClick={resetAllchanges}>
              reset all changes
            </button>
            <button type="submit">submit all changes</button>
          </span>
        </form>
      </main>
    </div>
  );
}

export default App;
