import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Home } from "../pages/Home/Home";

import { Layout } from "../components/layout";
// const CurrencyDetails = lazy(() => import("../modules/CurrencyDetails/CurrencyDetails"));
// const CurrencyExchange = lazy(() => import("../modules/CurrencyExchange/CurrencyExchange"));

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage errorMessage="Page not found" />,
    children: [
      {
        path: "",
        errorElement: <ErrorPage errorMessage="Page not found" />,
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <Home />
              </Suspense>
            ),
          },

          // {
          //   path: "details/:currencyCode",
          //   element: (
          //     <Suspense>
          //       <CurrencyDetails />
          //     </Suspense>
          //   ),
          // },
        ],
      },
    ],
  },
]);
