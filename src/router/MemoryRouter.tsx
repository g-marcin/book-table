import { Routes, createMemoryRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Details } from "../modules/Details";

export const memoryRouter = createMemoryRouter([
  {
    path: "/",
    element: <div>elos</div>,
  },
]);
