import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import News from "../pages/Newses/News/News";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Singlenews from "../pages/SingleNews/Singlenews";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/news-category/0")
            },
            {
                path: "/news/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <PrivateRoute><Singlenews></Singlenews></PrivateRoute>,
            },
            {
                path: "/news-category/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/news-category/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>
            }
        ]
    },
    {
        path: "login", element: <Login></Login>
    },
    { path: "/signup", element: <SignUp></SignUp> }

])
