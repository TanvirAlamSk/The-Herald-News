import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Newses from "../pages/Newses/Newses";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/news", element: <Newses></Newses>
            }
        ]
    }

])
