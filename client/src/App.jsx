import Navbar from "./compoenents/navbar/Navbar"
import "./index.scss"
import "./layout.scss"
import HomePage from "./routes/homepage/Homepage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";


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
          element:<ListPage/>
        },
        {path:"/:id",
          element:<SinglePage/>
        },
      
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