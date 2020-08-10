import React from "react";
import RouterApp from "./pages";
import { Provider } from "mobx-react";
import { Store } from "./tools";

function App() {
  return (
    <div className="App">
      <Provider Store={Store}>
        <RouterApp></RouterApp>
      </Provider>
    </div>
  );
}

export default App;
