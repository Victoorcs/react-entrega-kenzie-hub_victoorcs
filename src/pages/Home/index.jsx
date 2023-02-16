
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState  } from "react"
import api from "../../services/api"
import { StyledDash } from "./style"
import logoImg from '../../assets/Logo_1.svg'
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"


const HomePage = () => {
 
  const {user,setUser,logout} = useContext(UserContext)


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
        <div>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        </div>
      </main>
    </StyledDash>
  )
}

export default HomePage
