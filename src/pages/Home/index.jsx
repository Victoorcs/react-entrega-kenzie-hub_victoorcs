
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState  } from "react"
import api from "../../services/api"
import { StyledDash } from "./style"
import logoImg from '../../assets/Logo_1.svg'
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechContext } from "../../providers/TechContext"
import TechCreateForm from "../../Components/FormTech"
import TechUpdateForm from "../../Components/FormTechUpdate"




const HomePage = () => {
 
  const {user,setUser,logout} = useContext(UserContext)
  const {tech,techRemove,userId,identify,setIdentify,setIsModalOpen} = useContext(TechContext)


 

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
         <TechUpdateForm/>
        <TechCreateForm/>
              <div className="techList">
            
              <ul>
                { tech?.map((technology) => (
                  <li key={technology.id}  onClick={() => {
                    setIdentify(technology)
                     setIsModalOpen(true)
                     
                  }}>
                    <p>{technology.title}</p>
                    <p>{technology.status}</p>
                    <button onClick={()=>techRemove(technology.id)}>x</button>
                  </li>
                ))}
              </ul>
            </div>
      </main>
    </StyledDash>
  )
}

export default HomePage
