
import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";
import { useContext } from "react"

export const TechContext = createContext({})

export const TechProvider = ({children}) =>{
    const [tech,setTech] = useState([])
    const {getUser} = useContext(UserContext)
    
    useEffect(()=>{
       
        const token = localStorage.getItem('@KENZIEHUBTOKEN')
        if(token){
            const id = localStorage.getItem('@KENZIEHUBUSER')
            
            const loadTech = async () =>{
                try{
                    
                    const response = await getUser()
                    
                    setTech(response.data.techs)
                 
                   
                }
                catch (error){
                    console.log(error)
                    localStorage.removeItem('@KENZIEHUBTOKEN')
                }
            }
            loadTech()
        }
    },[])



    return(
        <TechContext.Provider value={{
            tech,
            setTech
        }}>
            {children}
        </TechContext.Provider>
    )


}