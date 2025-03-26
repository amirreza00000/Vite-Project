import { createBrowserRouter } from "react-router-dom";
import Landing from "../../screens/Landing";
export const commonRoutes=createBrowserRouter([
    {path:"/",element:<Landing/>},
    {path:"/blogs",element:<Blog/>}
])