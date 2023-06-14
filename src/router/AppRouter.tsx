import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ErrorPage } from "./ErrorPage";

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
  {
    path: "/:author",
    element: <Layout />,
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
  {
    path: "/:author/:bookId",
    element: <Layout />,
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
]);
