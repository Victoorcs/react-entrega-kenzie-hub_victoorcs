
import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";
import { useContext } from "react"

export const TechContext = createContext({})

export const TechProvider = ({children}) =>{
    const [tech,setTech] = useState([])
    const {getUser} = useContext(UserContext)
    const [editTech,setEditTech] = useState(null)
    const [identify,setIdentify] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    
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

    const techCreate =  async (formData) =>{
        try {
            const token = localStorage.getItem('@KENZIEHUBTOKEN')
            const response = await api.post('/users/techs', formData, {
                headers:{ Authorization: `Bearer ${token}`}
            })
            
            setTech([...tech, response.data])
          
        } catch (error) {
            console.error('Erro ao criar tecnologia:', error.message)
        }


    }
    
    const techRemove =  async(techId)=>{
        try {
            const token = localStorage.getItem('@KENZIEHUBTOKEN')
            const response = await api.delete(`/users/techs/${techId}`,{
                headers:{ Authorization: `Bearer ${token}`}
            }
            )
            
            const newTech = tech.filter(tech => tech.id !== techId)
            setTech(newTech)
            
        } catch (error) {
            console.log(error)
        }

    }

    const techUpdate = async (formData) =>{
        try {
            const token = localStorage.getItem('@KENZIEHUBTOKEN')
      
            const response = await api.put(`/users/techs/${identify.id}`,formData,{
                headers:{ Authorization: `Bearer ${token}`}
            })
            
            // const newTech = tech.map(tech =>{
            //     if(identify === tech.id){ return {...tech,...formData}
            //     }
            //     else{tech}
            // })
            const newTech =  await api.get('/profile',{
                headers: {
                    Authorization: `Bearer ${token}`,
                  }
            })
            setTech(newTech.data.tech)
            console.log(tech)

        } catch (error) {
            console.log(error)
        }
    }

    // const userId = (event) =>{
    //     setIdentify(event.target.id)
    //     console.log(event.target.id)
    //     setIsModalOpen(true)
    // }



    return(
        <TechContext.Provider value={{
            tech,
            setTech,
            techCreate,
            techRemove,
            techUpdate,
            editTech,
            setEditTech,
            setIsModalOpen,
            isModalOpen,
            identify,
            setIdentify
        }}>
            {children}
        </TechContext.Provider>
    )


}