
import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet, useNavigate, } from "react-router-dom"

const ProtectedRoutes = () =>{
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
   

   /* useEffect(()=>{
        
        if (!user){
            
            navigate('/')
        }
    },[])*/
    return (
        <>
        {user ? <Outlet/> : null}
        </>
    )
   
       

        
       
    

}
export default ProtectedRoutes