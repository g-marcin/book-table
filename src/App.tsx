import { BookContextProvider } from "./contexts/BookContext/BookContext";
import { AppRouter } from "./router";
import { RouterProvider } from "react-router-dom";
import { memoryRouter } from "./router/MemoryRouter";

function App() {
  return (
    <>
      <BookContextProvider>
        <RouterProvider router={AppRouter} />
      </BookContextProvider>
    </>
  );
}

export default App;
