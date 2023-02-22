import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../providers/TechContext"


const TechUpdateForm = () =>{
    const {techUpdate,editTech,setEditTech} = useContext(TechContext)

    const {register, handleSubmit} = useForm(//{defaultValues:{
       // title: editTech.title,
       // status: editTech.status,

   // }}
    )

    const submit = (formData) =>{
    techUpdate(formData)
    }

  return (
    <div role={"dialog"}>
            <button onClick={()=> setEditTech(null)}>Cancelar Edição</button>
        <form onSubmit={handleSubmit(submit)}>
            <h2>Atualize a tecnologia</h2>
        <input type="text" {...register("title")} placeholder="Titulo"/>
        <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
        </select>
            <button type="submit">Atualizar tecnologia</button>
        </form>
    </div>
  )
}
export default TechUpdateForm