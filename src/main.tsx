import {StrictMode} from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
