import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import Layout from "./components/Layout/Layout";
import IndexPage from "./pages/IndexPage"
import { loader as loaderDataIndex } from "./pages/IndexPage";
import Background from "./components/UI/Background";
import { useSelector } from 'react-redux'
import NotFound from "./pages/NotFound";
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
