import { PostPage } from "../components/PostPage";
import { About } from "../pages/About";
import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Posts } from "../pages/Posts";


export const privateRoutes = [
    { path: '/posts', element: <Posts /> }, 
    { path: '/posts/:id', element: <PostPage /> },
    { path: '/about', element: <About /> },
    { path: '/home', element: <Home /> },
    { path: '/error', element: <Error /> },
];


export const publicRoutes = [
    { path: '/login', element: <Login /> }, 
]