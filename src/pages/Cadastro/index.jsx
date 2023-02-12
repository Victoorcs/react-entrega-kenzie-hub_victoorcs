
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"


const schema = yup.object({

    name:  yup.string().required('O nome é Obrigatório.'),
    email: yup.string().email().required('Email é obrigatório.'),
    password: yup.string().min(8).required('Senha é obrigatória.'),
    bio: yup.string().required('Campo Obrigatório.'),
    contact: yup.string().required('Campo Obrigatório.'),
}).required()

const CadastroPage = () =>{

    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate()

    const signIn = async (data) =>{
    console.log(data)
    try{
       await api.post('https://kenziehub.herokuapp.com/users',data)
       navigate('/')
    }
    catch(error) {
        console.log(error)
    }
}




    return(
        <div>
            <form onSubmit={handleSubmit(signIn)}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id='name' { ...register('name')}/>
                    <p>{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id='email'{ ...register('email')}/>
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" id='senha' { ...register('password')}/>
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <label htmlFor="senha">Confirmar senha:</label>
                    <input type="text" id='senha'{ ...register('password')}/>
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <input type="text" id='bio' { ...register('bio')}/>
                    <p>{errors.bio?.message}</p>
                </div>
                <div>
                    <label htmlFor="contato">Contato:</label>
                    <input type="text" id='contato' { ...register('contact')}/>
                    <p>{errors.contact?.message}</p>
                </div>
                <div>

                <select { ...register('course_module')} >
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                </div>
                
                <button type="submit">Entrar</button>

            </form>
        </div>
    )
}


export default CadastroPage