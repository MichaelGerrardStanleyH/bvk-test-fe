import { useState } from "react";
import { Home } from "./pages/Home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Main from "./pages/Main";
import MemberList from "./pages/MemberList";
import CreateMember from "./pages/CreateMember";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SingIn />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/member",
    element: <MemberList />,
  },
  {
    path: "/create",
    element: <CreateMember />
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
