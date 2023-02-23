

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
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={{

          overlay:{
            backgroundColor:'rgba(0,0,0,0.5)'
          },
          content:{border:'none',backgroundColor:'rgb(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center'}
        }}>
        <StyledModal>
        <form onSubmit={handleSubmit(submit)}>
            <div className="modalH">
            <p>Cadastrar Tecnologia</p>
            <button onClick={closeModal} className="closeBtn">X</button>
            </div>
            <div className="inputM">
            <label htmlFor="title">Titulo</label>
        <input type="text" {...register("title")} placeholder="Titulo" id="title"/>
            </div>
            <div className="selectM">
        <label htmlFor="level">Selecionar Status</label>
        <select {...register("status")} id="level">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
        </select>
            </div>
            <button type="submit" className="cadBtn">Cadastrar tecnologia</button>
        </form>
        </StyledModal>
        </Modal>
    </div>
  )
}
export default TechCreateForm