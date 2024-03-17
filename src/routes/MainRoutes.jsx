import { Route, Routes } from "react-router"
import Admin from "../components/pages/admin/admin"
import Favorite from "../components/pages/favorite/favorite"
import Home from "../components/pages/home/home"


export default function MainRoutes() {
    const RUBLICK = [
        {path: "/", component: <Home/>},
        {path: "/favorite", component: <Favorite/>},
        {path: "/admin", component: <Admin/>},
    ]
  return (
    <Routes>
      {RUBLICK.map((el, idx)=> (<Route path={el.path} element={el.component} key={idx}/>))}
    </Routes>
  )
}
