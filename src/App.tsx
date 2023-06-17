import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";
import { ThemeContextProvider } from "./contexts";

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
