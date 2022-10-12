import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import About from "./components/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", loader: () => fetch("tshirt.json"), element: <Home /> },
        { path: "/order", element: <Order /> },
        { path: "/about", element: <About></About> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
