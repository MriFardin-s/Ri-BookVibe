import { createBrowserRouter } from "react-router";
import Books from "../Book/Books";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index:true,
        element: <Homepage/>
      },
      {
        path:'/books',
        element: <Books/>
      }
    ],
    errorElement: <ErrorPage/>

  },
 
  
]);