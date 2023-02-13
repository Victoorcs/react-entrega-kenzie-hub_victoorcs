
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
