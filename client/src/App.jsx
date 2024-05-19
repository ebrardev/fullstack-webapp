

import PageHome from "./routes/PageHome/pageHome"

import {Layout,RequireAuth} from "./routes/layout/layout"

import ListPage from "./routes/listPage/listPage"
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom"
import SinglePage from "./routes/singlePage/SinglePage"
import ProfilePage from "./routes/profilePage/profilePage"
import Login from "./routes/login/Login"
import Register from "./routes/register/Register"
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage"
import NewPostPage from "./routes/newPostPage/newPostPage"
import { listPageLoader, singlePageLoader } from "./lib/loaders"


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
            element:<ListPage/>,
            loader: listPageLoader
          },
          {
            path:"/:id",
            element: <SinglePage/>,
            loader: singlePageLoader,
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
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element: <ProfilePage/>
        },
        {
          path:"/profile/update",
          element: <ProfileUpdatePage/>
        },
        {
          path:"/add",
          element: <NewPostPage/>
        },
      ]
    }
  
  ])
  return (

    <RouterProvider router={router}/>
  )
}

export default App