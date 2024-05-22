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
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";

function App() {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<NotFound/>}>
        <Route path="/" element={<LoginPage />} />
        {userInfo != null ?
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
