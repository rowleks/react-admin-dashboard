import { Navbar, Footer, Menu } from "./components"
import { Home, Users, Products } from "./pages"
import "./styles/global.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"



function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <section className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </section>
        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      children: [{
        path: "/",
        element: (<Home />)
      },
      {
        path: "users",
        element: (<Users />)
      },
      {
        path: "products",
        element: (<Products />)
      },
    ]
  }  
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
