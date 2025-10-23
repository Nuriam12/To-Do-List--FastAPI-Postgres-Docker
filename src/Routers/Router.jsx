import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {ListaDeTareas} from "../componentes.jsx/ListaDeTareas"
export const MyRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListaDeTareas/>}/>
        </Routes>
    </BrowserRouter>
)
