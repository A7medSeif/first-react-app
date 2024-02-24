import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Layout from "./components/Layout/Layout";

import Portfolio from "./components/Portfolio/Portfolio";
import Start from "./components/Start/Start";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Start /> },
        { path: "startframework", element: <Start /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
