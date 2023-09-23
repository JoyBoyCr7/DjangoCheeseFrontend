import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import 'milligram'
import { CheesesLoader, ShowCheese } from "./loaders"
import { CreateCheese, updateCheese, deleteAction} from "./actions"
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={CheesesLoader}/>
            <Route path="cheese/:id" element={<Show/>} loader={ShowCheese}/>
            <Route path="create" action={CreateCheese}/>
            <Route path="update/:id" action={updateCheese}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))

export default router