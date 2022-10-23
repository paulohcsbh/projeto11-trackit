import Stats from "./Stats";
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"

export default function Cadastrar() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const navigate = useNavigate()
    const [desabilitar, setDesabilitar] = useState(false)
    const [loading, setLoading] = useState("Cadastrar")

    function signIn(e) {
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
        e.preventDefault()
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", { email: email, name: nome, image: foto, password: senha })
        requisicao.then(() => { alert("Cadastro realizado com sucesso!"); setDesabilitar(false); navigate("/") })
        requisicao.catch(() => { alert("Erro! Email inválido!"); setDesabilitar(false);setLoading("Cadastrar") })

    }
    return (
        <>
            <Stats />
            <ContainerLogin>
                <form onSubmit={signIn}>
                    <Email data-identifier="input-email" type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={desabilitar}></Email>
                    <Senha data-identifier="input-password" type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} required disabled={desabilitar}></Senha>
                    <Nome data-identifier="input-name" type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} required disabled={desabilitar}></Nome>
                    <Foto data-identifier="input-photo" type="url" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} required disabled={desabilitar}></Foto>
                    <Entrar type="submit" disabled={desabilitar}>{loading}</Entrar>
                </form>
                <Link to="/">
                    <Login data-identifier="back-to-login-action">Já tem uma conta? Faça login!</Login>
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
const Nome = styled(Senha)`
`

const Foto = styled(Senha)`
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
const Login = styled.p`
width: 232px;
height: 17px;
font-weight: 400;
font-size: 14px;
color: #52b6ff;
margin: 25px 0 0 74px;
font-family: Lexend Deca;
cursor: pointer;
text-decoration: underline;
`