import Dashboard from "./Pages/Dasboard/Dashboard"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TransactionPages from "./Pages/Dasboard/Transaction/TransactionPages"
import Support from "./Pages/Support/Support";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <TransactionPages />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
]);
function App() {
  return (
<>
  <RouterProvider router={router} />
   
    </>
  );
}

export default App
