import * as React from "react";
import { render } from "react-dom";
import { Main } from "./main";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import "./styles.scss";
document.title = "Reid's Portfolio"

function App() {
  return (
        <Router basename="/portfolio">
          <Main />
        </Router>   
    
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
