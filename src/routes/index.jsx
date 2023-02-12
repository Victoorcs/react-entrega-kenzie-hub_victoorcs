import React from "react";
import { Route, Routes } from "react-router-dom";
import CadastroPage from "../pages/Cadastro";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/cadastro" element={<CadastroPage/>}/>
            <Route path="/home" element={<HomePage/>}/>

        </Routes>
    )

}


export default AppRoutes