import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Layout, Loader } from "../components";
import { AuthorsTable,AuthorBooks } from "../modules";
const BooksPage = lazy(() => import("../modules/BooksPage/BooksPage"));

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage errorMessage="Page not found" />,
    children: [
      {
        path: "/main",
        element: (
          <Suspense fallback={<Loader />}>
            <BooksPage />
          </Suspense>
        ),
      },
      {
        path: "/authors",
        element: (
          <Suspense fallback={<Loader />}>
            <AuthorsTable />
          </Suspense>
        ),
      },
      {
        path: "/books",
        element: (
          <Suspense fallback={<Loader />}>
            <AuthorBooks fetchedBooks={[]}/>
          </Suspense>
        ),
      },
      {
        path: "/description",
        element: (
          <Suspense fallback={<Loader />}>
            <BooksPage />
          </Suspense>
        ),
      },
    ],
  },
]);
