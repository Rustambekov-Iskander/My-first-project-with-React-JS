import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import Error from "../pages/Error";

export const PrivateRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostPage/>, exact: true},
    {path: '*', component: <Error/>, exact: true}
]

export const PublicRoutes = [
    {path: '*', component: <Login/>, exact: true},
]