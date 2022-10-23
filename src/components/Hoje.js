import Footer from "./Footer";
import Header from "./Header";
import BoxHoje from "./BoxHoje";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import { ProgressbarContext } from "../context/ProgressbarContext";
import { ThreeDots } from "react-loader-spinner";

export default function Hoje({ token }) {
    let date = dayjs().locale("pt-br").format("dddd, DD/MM")
    date = date[0].toUpperCase() + date.slice(1)
    const lista = []
    const [estado, setEstado] = useState()
    const [hoje, setHoje] = useState([])
    const { setDone } = useContext(ProgressbarContext)
    let valor = 0
    setDone(valor)
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", { headers: { "Authorization": `Bearer ${token}` }, })
        promise.then((resposta) => { setHoje(resposta.data) })
        promise.catch(erro => { console.log(erro.response.data) })

    }, [token, estado])
    for (let i = 0; i < hoje.length; i++) {
        const item = hoje[i]
        if (item.done === true) {
            lista.push(item)
            valor = ((lista.length * 100) / hoje.length).toFixed(0)
            setDone(valor)
        }
    }

    if (hoje === undefined) {
        return (
            <Loading>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#52b6ff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </Loading>
        )
    }

    return (
        <>
            <Geral>
                <Header />
                <Data data-identifier="today-infos">{date}</Data>
                {lista.length === 0 ? <Progresso>Nenhum hábito concluído ainda</Progresso> : <Porcentagem data-identifier="today-infos">{valor}% dos hábitos concluídos</Porcentagem>}
                {hoje.map((today) => <BoxHoje key={today.id} today={today} token={token} setEstado={setEstado} estado={estado}></BoxHoje>)}
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
const Data = styled.p`
width: 275px;
height: 29px;
font-family: Lexend Deca;
font-weigth: 400;
font-size 23px;
margin: 67px 0 0 17px;
color: #126ba5;
`
const Progresso = styled.p`
width: 308px;
height: 23px;
font-family: Lexend Deca;
font-weigth: 400;
font-size 18px;
margin: 0 0 28px 17px;
color: #bababa;
`
const Porcentagem = styled(Progresso)`
color: #8fc549;
`
const Loading = styled.div`
width: 375px;
height: 667px;
display: flex;
justify-content: center;
align-items: center;
z-index:5;
`