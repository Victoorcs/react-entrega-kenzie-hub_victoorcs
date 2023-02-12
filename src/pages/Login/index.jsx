import { Link } from "react-router-dom"
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useState } from "react"
import { StyledLogin } from "./style"




const schema = yup.object({

    email: yup.string().email().required('Email é obrigatório.'),
    password: yup.string().min(6).required('Senha é obrigatória.')
}).required()

const LoginPage = () =>{

    const {register, handleSubmit,formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [usuario,setUsuario] = useState([])


    const signIn = async (data) =>{
    console.log(data)
    setLoading(true)
    try{
       const response = await api.post('/sessions',data)
       const {user ,token} = response.data
       console.log(response)
        setUsuario(usuario)
        localStorage.setItem('@KENZIEHUBTOKEN', token)
        localStorage.setItem('@KENZIEHUBUSER', user.id)
       navigate('/home')
    }
    catch(error) {
        console.log(error)
    }
}

    return(
        <StyledLogin>

            <header><h1>Kenzie Hub</h1></header>
            <main>
                    <h2>Login</h2>
                <form onSubmit={handleSubmit(signIn)}>
                    <div>
                            <label htmlFor="email">Email:</label>
                            <input type="text" id='email'{ ...register('email')}/>
                            <p>{errors.email?.message}</p>
                    </div>
                    <div>
                            <label htmlFor="password">Senha:</label>
                            <input type="text" id='password' { ...register('password')}/>
                            <p>{errors.password?.message}</p>
                    </div>
                        <button type="submit">Entrar</button>

                </form>



            <Link to="/cadastro">
            cadastrar
            </Link>


        </main>
        </StyledLogin>
    )
}


export default LoginPage