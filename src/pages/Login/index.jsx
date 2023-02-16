import { Link } from "react-router-dom"
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useState } from "react"
import { StyledLogin } from "./style"
import logoImg from '../../assets/Logo_1.svg'
import {  toast } from 'react-toastify'
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"




const schema = yup.object({

    email: yup.string().email().required('Email é obrigatório.'),
    password: yup.string().min(6).required('Senha é obrigatória.')
}).required()

const LoginPage = () =>{

    const {register, handleSubmit,formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate()
   
    const {loading,setLoading,user,setUser,signIn} = useContext(UserContext)


   

    return(
        <StyledLogin>

            <header><img src={logoImg} alt="logo" /></header>
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
                        <div className="divForm">
                                <span>Ainda não possui uma conta?</span>
                            <button className="cadBtn" onClick={() => navigate('/cadastro')}>Cadastre-se</button>
                    </div>

        </main>
        </StyledLogin>
    )
}


export default LoginPage