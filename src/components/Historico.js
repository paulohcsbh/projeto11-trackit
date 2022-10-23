import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
export default function Historico() {
    return (
        <>
            <Geral>
                <Header />
                <Titulo>Histórico</Titulo>
                <Mensagem>Em breve você poderá ver o histórico dos seus hábitos aqui!</Mensagem>
                <Footer />
            </Geral>
        </>
    )
}
const Geral = styled.div`
width: 375px;
height: 597px;
background-color: #e5e5e5;
padding-top: 30px;
overflow: auto;
`
const Titulo = styled.p`
width: 172px;
height: 29px;
font-family: Lexend Deca;
font-weigth: 400;
font-size 23px;
margin: 67px 0 0 17px;
color: #126ba5;
`
const Mensagem = styled.p`
width: 338px;
height: 74px;
font-family: Lexend Deca;
font-weigth: 400;
font-size 18px;
margin: 0 0 28px 15px;
color: #666666;
`