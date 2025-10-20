import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Lista} from "../Pages/Lista"
export const MyRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Lista/>}/>
        </Routes>
    </BrowserRouter>
)
