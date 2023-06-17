import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Layout, DetailsPlaceholder, Loader } from "../components";
const BooksPage = lazy(() => import("../pages/BooksPage/BooksPage"));
const Details = lazy(() => import("../modules/Details/Details"));
const BookDetails = lazy(() => import("../modules/Details/BookDetails/BookDetails"));

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage errorMessage="Page not found" />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <BooksPage />
          </Suspense>
        ),

        children: [
          {
            path: ":author",
            element: (
              <Suspense fallback={<Loader />}>
                <Details />
              </Suspense>
            ),
            children: [
              {
                path: ":bookId",
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
