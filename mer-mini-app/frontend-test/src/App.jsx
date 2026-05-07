import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout.jsx";
import Home from "./components/Home.jsx";
import CreateEmp from "./components/CreateEmp.jsx";
import ListOfEmps from "./components/ListOfEmps.jsx";
import Emp from './components/Emp.jsx'
import EditEmp from './components/EditEmp.jsx'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "create-emp", element: <CreateEmp /> },
        { path: "list", element: <ListOfEmps /> },
        { path:"employee",element:<Emp />},
        { path:"edit-emp",element:<EditEmp />}

      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;