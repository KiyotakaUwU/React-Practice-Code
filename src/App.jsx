import React, { useState } from "react";
import Person from "./components/Person";

function App() {
  const [state, setState] = useState(false);
  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center">
        <Person connected={state}></Person>
        <button
          className="bg-emerald-500 hover:bg-emerald-300"
          onClick={() => {
            setState(!state);
          }}
        >
          toggle
        </button>
      </div>
    </div>
  );
}

export default App;
