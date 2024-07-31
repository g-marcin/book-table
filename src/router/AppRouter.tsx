import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Layout, Loader } from "../components";
import { AuthorsTable,AuthorBooks } from "../modules";
import { Books } from "../modules/Books";
import { Page } from "../layout/Page";
import { AxiosResponse } from "axios";
import { httpClient } from "../common";
import { bookDataMapper } from "../modules/mappers";
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
        path: "/authors/:authorId",
        element: (
          <Suspense fallback={<Loader />}>
            <Page className="h-full flex">
            <AuthorsTable />
            <Books/>
            </Page>
            
          </Suspense>
        ),
        action:async({params,request})=>{
          
          const response = await httpClient.get(`/volumes?q=inauthor:${params.authorId}&startIndex=0`)
          const json = bookDataMapper(response.data.items)

            return json
          
        }
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
