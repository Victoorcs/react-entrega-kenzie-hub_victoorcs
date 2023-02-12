
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import api from "../../services/api"
import { StyledDash } from "./style"
import logoImg from '../../assets/Logo_1.svg'


const HomePage = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem("@KENZIEHUBUSER")
      const response = await api.get(`/users/${userId}`)
      setUser(response.data)
    };
    getUser();
  }, []);

  const logout = () => {
    setUser([])
    localStorage.removeItem('@KENZIEHUBTOKEN')
    localStorage.removeItem('@KENZIEHUBUSER')
    navigate('/')
    }

  return (
    <StyledDash>
      <nav>
      <img src={logoImg} alt="logo" />
        <button onClick={logout}>Sair</button>
      </nav>
      <header>
        <h3>Olá, {user.name}</h3>
        <p> {user.course_module}</p>
      </header>
      <main>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
      </main>
    </StyledDash>
  )
}

export default HomePage




































/*
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
const [usuario, setUsuario] = useState([]);
const [modules, setModules] = useState([]);
const navigate = useNavigate();

useEffect(() => {
const loadUser = async () => {
const user = JSON.parse(localStorage.getItem('@KENZIEHUBUSER'));
if (!user) return navigate("/");
setUser(user);
};
const loadModules = async () => {
const { data } = await api.get("/modules");
setModules(data);
};
loadUser();
loadModules();
}, []);

const logout = () => {
setUser({});
localStorage.removeItem('@KENZIEHUBTOKEN');
localStorage.removeItem('@KENZIEHUBUSER');
navigate("/");
};

return (
<main>
<h1>Bem-vindo, {user.name}</h1>
<p>Seus módulos:</p>
<ul>
{modules.map((module) => (
<li key={module.id}>{module.name}</li>
))}
</ul>
<button onClick={logout}>Sair</button>
</main>
);
};

export default HomePage*/






























/*const HomePage = () =>{
    return(
        <div>
            <h1>home</h1>
        </div>
    )
}


export default HomePage*/