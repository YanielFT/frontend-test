import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Background from "./components/UI/Background";
import { useSelector } from 'react-redux'
import { loader as loaderDataIndex } from "./pages/IndexPage";
import NotFound from "./pages/NotFound";

import IndexPage from "./pages/IndexPage";
const LoginPage = React.lazy(() => import("./pages/LoginPage"));

function App() {
  const { userToken } = useSelector((state) => state.auth);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<NotFound/>}>
        <Route path="/" element={<LoginPage />} />
        {userToken != null ?
          <Route path="/chat" element={<Layout />}>
            <Route index
              element={<Background />}
            />
            <Route path=":id"
              element={<IndexPage />}
              loader={loaderDataIndex}
            />
          </Route> : <></>
        }
      </Route>
    )
  );



  return (
    <RouterProvider router={router} />
  )
}

export default App
