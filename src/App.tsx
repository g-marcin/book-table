import { ThemeContextProvider } from "./contexts";
import { AppRouter } from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <RouterProvider router={AppRouter} />
      </ThemeContextProvider>
    </>
  );
}

export default App;
