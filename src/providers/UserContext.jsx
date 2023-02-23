
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
    const [user, setUser] = useState(null)

    const navigate = useNavigate()



    useEffect(()=>{
        const token = localStorage.getItem('@KENZIEHUBTOKEN')
        if(token){
           
            const autoLogin = async () =>{
                try{
                    const response = await api.get('/profile',{
                        headers: {
                            Authorization: `Bearer ${token}`,
                          }
                    })
                    setUser(response.data)
                    navigate('/home')
                }
                catch (error){
                    console.log(error)
                    localStorage.removeItem('@KENZIEHUBTOKEN')
                }
            }
            autoLogin()
        }
        else{
            navigate('/')
        }
    },[])

   
       
        const getUser = async () => {
            try{

                const userId = localStorage.getItem("@KENZIEHUBUSER")
                const response = await api.get(`/users/${userId}`)
                setUser(response.data)
                return(response)
            }
            catch(error){
                console.error(error)
            }
        };
     
    
      const logout = () => {
        setUser(null)
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
                getUser,
                logout,
                signIn,
                signUp
            }}>
                {children}
            </UserContext.Provider>
        )
}
