import * as React from "react";
import { render } from "react-dom";
import { Main } from "./main";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import "./styles.scss";
document.title = "Reid's Portfolio"

function App() {

  console.log(process.env.PUBLIC_URL)
  return (
        <Router basename={process.env.PUBLIC_URL}>
          <Main />
        </Router>   
    
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
