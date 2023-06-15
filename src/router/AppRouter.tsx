import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ErrorPage } from "./ErrorPage";
import { Layout } from "../components/layout";
import { Details } from "../modules/Details";
import { BookDetails } from "../modules/Details/BookDetails/BookDetails";
// const CurrencyDetails = lazy(() => import("../modules/CurrencyDetails/CurrencyDetails"));
// const CurrencyExchange = lazy(() => import("../modules/CurrencyExchange/CurrencyExchange"));

const Loader = () => {
  return <div>Loading...</div>;
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage errorMessage="Page not found" />,
    children: [
      {
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),

        children: [
          {
            path: "/",
            element: <></>,
          },

          {
            path: "/:author",
            element: (
              <Suspense fallback={<Loader />}>
                <Details />
              </Suspense>
            ),
            children: [
              {
                path: "/:author/:bookId",
                element: (
                  <Suspense fallback={<Loader />}>
                    <BookDetails />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);
