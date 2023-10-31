import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
  {
    path: "about",
    element: <About />,
  },
]);
function App() {
  return (
    <>
      <Header />
      {/* <Body/> */}
      <Outlet />
    </>
  );
}

export default App;
