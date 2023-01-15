import { useRoutes } from "react-router-dom";
import Board from "./pages/Board";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";



export default function Routes(){
    return useRoutes([
        {
            path: "login",
            element: <Login />
        },
        {
            path: "board/:email",
            element: <Board />
        },
        {
            path: "*",
            element: <ErrorPage />
        }
       
    ])
}