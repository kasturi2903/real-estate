//import Navbar from "./compoenents/navbar/Navbar"
import "./index.scss"
import "./layout.scss"
import HomePage from "./routes/homepage/Homepage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import {Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import 'leaflet/dist/leaflet.css';

import ProfilePage from "./routes/profilepage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostpage/newPostPage";
import { listPageLoader, singlePageLoader } from "./lib/loaders";

function App() {

  const router= createBrowserRouter([
   { path:"/",
    element: <Layout/>,
    children:[
      {path:"/",
        element:
          <HomePage/>
        },
        {path:"/list",
          element:<ListPage/>,
          loader:listPageLoader,
        },
        {path:"/:id",
          element:<SinglePage/>,
          loader:singlePageLoader
        },
        
        {path:"/login",
          element:<Login/>
        },
        {path:"/register",
          element:<Register/>
        },
      
    ]
   },
   {
    path:"/",
    element:<RequireAuth/>,
    children:[
      {path:"/profile",
        element:<ProfilePage/>,
      },
      {
        path:"/profile/update",
        element:<ProfileUpdatePage/>,
      },{
        path:"/add",
        element:<NewPostPage/>
      }
    ]

   }
  ])
  return (
    // <div className="layout">
    //   <div className="navbar">
    //   <Navbar/>
    //   </div>
    //  <div className="content">
    //  <HomePage/>
    //  </div>
    
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App