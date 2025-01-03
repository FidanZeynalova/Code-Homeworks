import Basket from "../pages/user/Basket/Basket";
import Detail from "../pages/user/Detail/Detail";
import Favorites from "../pages/user/Favorites/Favorites";
import Home from "../pages/user/Home/Home";
import UserRoot from "../pages/user/UserRoot";



const ROUTES = [
    {
        path: "/",
        element:<UserRoot/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },
            {
                path:"/:id",
                element:<Detail/>
            }
        ]
    }
]


export default ROUTES