
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
function App() {
  const router = createBrowserRouter([
        {
            path: "/",
            element: <><Home /></>
        },
        {
            path: "/signUp",
            element: <><SignUp /></>
        }
    ]);
  return (
    <div className="App">
            <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
