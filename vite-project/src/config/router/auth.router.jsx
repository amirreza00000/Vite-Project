import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/LoginForm/login";
import Register from "../../components/LoginForm/register";


export const authRoutes = createBrowserRouter([
    {/*...commonRoute*/},
    {path:"/" , element: <Register/>},
    {path:"/login" , element: <Login/>}
])