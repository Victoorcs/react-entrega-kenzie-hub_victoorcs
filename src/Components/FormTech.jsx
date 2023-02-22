

import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../providers/TechContext"
import Modal from "react-modal"
import { StyledModal } from "./style"



const TechCreateForm = () =>{
    const {register, handleSubmit} = useForm()
    const {techCreate} = useContext(TechContext)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
      }
      const closeModal = () => {
        setIsModalOpen(false)
      }

    const submit = (formData) =>{
    techCreate(formData)
    closeModal()
    }

  return (
    <div>
        <div className="tech">
        <h2>Tecnologias</h2>
        <button onClick={openModal}>+</button>
        </div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <StyledModal>
        <form onSubmit={handleSubmit(submit)}>
            <h2>Crie uma Tecnologia</h2>
        <input type="text" {...register("title")} placeholder="Titulo"/>
        <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
        </select>
            <button type="submit">Cadastrar tecnologia</button>
            <button onClick={closeModal}>Fechar modal</button>
        </form>
        </StyledModal>
        </Modal>
    </div>
  )
}
export default TechCreateForm