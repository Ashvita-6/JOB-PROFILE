import App from "../App";
import Home1 from "../pages/Home";
import {
    createBrowserRouter,
   } from "react-router-dom";
import About from "../pages/about";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:"/",
        element: <Home1 />
        },
      ]
    },
  ]);
  export default router;