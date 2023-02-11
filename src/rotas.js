import React from "react";
import { BrowserRouter,  Route, Routes} from "react-router-dom";

import Clientes from "./pages/Clientes";
import Home from "./pages/Home";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/clientes" element={<Clientes/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}