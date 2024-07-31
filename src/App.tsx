import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";
import { ThemeContextProvider } from "./contexts";

function App() {
  return (
      <ThemeContextProvider>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <RouterProvider router={AppRouter} />
      </ThemeContextProvider>
  );
}

export default App;
