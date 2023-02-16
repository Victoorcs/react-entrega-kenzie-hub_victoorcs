
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom"
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({})
export const UserProvider = ({children}) =>{

    const [loading, setLoading] = useState(false)
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
   
        const signIn = async (data) =>{
            
            setLoading(true)
            try{
               const response = await api.post('/sessions',data)
               const {user ,token} = response.data
               toast.success("Login realizado com sucesso!")
                setUser(user)
                localStorage.setItem('@KENZIEHUBTOKEN', token)
                localStorage.setItem('@KENZIEHUBUSER', user.id)
               navigate('/home')
            }
            catch(error) {
                toast.error("Ops! Algo deu errado.")
                console.log(error)
            }
        }

        const signUp = async (data) =>{
    
            try{
               await api.post('/users',data)
               toast.success("Conta criada com sucesso!")
               navigate('/')
            }
            catch(error) {
                toast.error("Ops! Algo deu errado.")
                console.log(error)
            }
        }

        return(
            <UserContext.Provider value={{
                loading,
                setLoading,
                user,
                setUser,
                logout,
                signIn,
                signUp
            }}>
                {children}
            </UserContext.Provider>
        )
}
