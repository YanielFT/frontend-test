import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import Layout from "./components/Layout/Layout";
import IndexPage from "./pages/IndexPage"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Route>
    )
  );



  return (

    <RouterProvider router={router} />

  )
}

export default App
