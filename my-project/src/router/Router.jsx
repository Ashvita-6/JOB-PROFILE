import App from "../App";
import Home1 from "../pages/Home";
import {
    createBrowserRouter,
   } from "react-router-dom";
import About from "../pages/about";
import Post_a_job from "../pages/Post_a_job";
import MyJobs from "../pages/MyJobs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:"/",
        element: <Home1 />
        },
        {
          path:'/post-job',
          element:<Post_a_job />
        },
        {
          path:'/my-job',
          element:<MyJobs />
        }
      ]
    },
  ]);
  export default router;