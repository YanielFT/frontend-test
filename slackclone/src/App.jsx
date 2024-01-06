import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Login } from "./pages/Login"
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<Login />}>
        
      </Route>
    )
  );

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />;
    </>
  )
}

export default App
