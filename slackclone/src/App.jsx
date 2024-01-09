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
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<Layout />}>
          <Route index
            element={<Background/>}
          />
          <Route path=":id"
            element={<IndexPage />}
            loader={loaderDataIndex}
          />
        </Route>
      </Route>
    )
  );



  return (

    <RouterProvider router={router} />

  )
}

export default App
