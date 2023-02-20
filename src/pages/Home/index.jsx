
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState  } from "react"
import api from "../../services/api"
import { StyledDash } from "./style"
import logoImg from '../../assets/Logo_1.svg'
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechContext } from "../../providers/TechContext"


const HomePage = () => {
 
  const {user,setUser,logout} = useContext(UserContext)
  const {tech} = useContext(TechContext)



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
              <h1>Tecnologias</h1>
              <ul>
                { tech?.map((technology) => (
                  <li key={technology.id}>
                    <p>{technology.name}</p>
                    <p>{technology.description}</p>
                  </li>
                ))}
              </ul>
            </div>
      </main>
    </StyledDash>
  )
}

export default HomePage
