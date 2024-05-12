

import PageHome from "./routes/PageHome/pageHome"

import Layout from "./routes/layout/layout"
import ListPage from "./routes/listPage/listPage"
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom"
import SinglePage from "./routes/singlePage/SinglePage"
import ProfilePage from "./routes/profilePage/profilePage"
import Login from "./routes/login/Login"
import Register from "./routes/register/Register"


function App() {

  const router  = createBrowserRouter([
    {
      path:"/",
      element:
        <Layout/>,
        children:[
          {
            path:"/",
            element:<PageHome/>
          },
          {
            path:"/list",
            element:<ListPage/>
          },
          {
            path:"/:id",
            element: <SinglePage/>
          },
          {
            path:"/profile",
            element: <ProfilePage/>
          },
          {
            path:"/login",
            element: <Login/>
          },
          {
            path:"/register",
            element: <Register/>
          },
         
        ]
      
    },
  
  ])
  return (

    <RouterProvider router={router}/>
  )
}

export default App