import Stats from "./Stats"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useState, useContext } from "react"
import axios from "axios"
import { FotoContext } from "../context/FotoContext"
import { ThreeDots } from "react-loader-spinner"

export default function Login(props) {
    const { setToken } = props
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { setFoto } = useContext(FotoContext)
    const [loading, setLoading] = useState("Entrar")
    const [desabilitar, setDesabilitar] = useState(false)

    function login(e) {
        setDesabilitar(true)
        setLoading(<ThreeDots
            height="60"
            width="60"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />)
        console.log(email)
        e.preventDefault()
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", { email: email, password: senha })
        requisicao.then((a) => { navigate("/hoje"); console.log(a); setFoto(a.data.image); setToken(a.data.token) })
        requisicao.catch(() => { alert("Email ou senha inválidos"); setDesabilitar(false); setLoading("Entrar") })
    }

    return (
        <>
            <Stats />
            <ContainerLogin>
                <form onSubmit={login}>
                    <Email data-identifier="input-email" type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={desabilitar}></Email>
                    <Senha data-identifier="input-password" type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} required disabled={desabilitar}></Senha>
                    <Entrar data-identifier="login-btn" type="submit" disabled={desabilitar}>{loading}</Entrar>
                </form>
                <Link to={"/cadastrar"} >
                    <Cadastro data-identifier="sign-up-action">Não tem uma conta? Cadastre-se!</Cadastro>
                </Link>
            </ContainerLogin>

        </>
    )
}
const ContainerLogin = styled.div`
width: 303px;
height: 153px;
display: block;
`
const Email = styled.input`
width: 303px;
height: 45px;
margin: 32.62px 0 6px 36px;
padding-left: 11px;
font-weight: 400;
font-size: 20px;
font-family: Lexend Deca;
border-radius: 5px;
color: #dbdbdb;
border: 1px solid #d4d4d4;
`
const Senha = styled.input`
width: 303px;
height: 45px;
margin: 0 0 6px 36px;
padding-left: 11px;
font-weight: 400;
font-size: 20px;
font-family: Lexend Deca;
border-radius: 8px;
color: #dbdbdb;
border: 1px solid #d4d4d4;
`
const Entrar = styled.button`
width: 303px;
height: 45px;
margin-left: 36px;
font-weight: 400;
font-size: 20px;
font-family: Lexend Deca;
background-color: #52b6ff;
border: transparent;
border-radius: 5px;
color: #ffffff;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`
const Cadastro = styled.p`
width: 242px;
height: 17px;
font-weight: 400;
font-size: 14px;
color: #52b6ff;
margin: 25px 0 0 74px;
font-family: Lexend Deca;
cursor: pointer;
text-decoration: underline;
`