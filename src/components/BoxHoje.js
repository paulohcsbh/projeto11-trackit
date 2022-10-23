import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"

export default function BoxHoje(props) {
    const { today, token, setEstado } = props
    const [colorir, setColorir] = useState(true)

    function qualClicado(id) {
        if (colorir === true || today.done === false) {
            setColorir(false)
            const add = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, { headers: { "Authorization": `Bearer ${token}` }, })
            add.catch(() => { alert("Erro") })
            setEstado(Math.random())

        } else {
            setColorir(true)
            const remove = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, { headers: { "Authorization": `Bearer ${token}` }, })
            remove.catch(() => { alert("Erro") })
            setEstado(Math.random())
        }
    }
    useEffect(() => {
        if (today.done === true) {
            setColorir(false)

        }
    }, [today])

    return (
        <Container>
            <ContainerTarefa data-identifier="today-infos">
                <NomeTarefa >{today.name}</NomeTarefa>
                <Sequencia>Sequencia atual: <Text verde={today.done === false ? "#666666" : "#8fc549"}> {today.currentSequence} dias</Text></Sequencia>
                <Recorde>Seu recorde: <Text verde={today.done === false && today.currentSequence === today.highestSequence ? "#666666" : "#8fc549"}> {today.highestSequence} dias</Text></Recorde>
            </ContainerTarefa>
            <BoxMarcado data-identifier="done-habit-btn" onClick={() => qualClicado(today.id)} marcado={today.done === false ? "#ebebeb" : colorir === false ? "#8fc549" : ""}><Check>✓</Check></BoxMarcado>
        </Container>

    )
}
const Container = styled.div`
width: 340px;
height: 94px;
margin: 28px 17px;
background-color: #ffffff;
border-radius: 9px;
padding:13px 0 0 17px;
display: flex;
`
const ContainerTarefa = styled.div`
width: 208px;
height: 64px;
border-radius: 5px;
`
const NomeTarefa = styled.p`
width: 208px;
height: 25px;
font-weight: 400;
font-size: 20px;
font-family: Lexend Deca;
border-radius: 5px;
color: #666666;
`
const Sequencia = styled.div`
font-weight: 400;
font-size: 13px;
font-family: Lexend Deca;
line-height: 17px;
color: #666666;
display: flex;

`
const Recorde = styled.div`
font-weight: 400;
font-size: 13px;
font-family: Lexend Deca;
line-height: 17px;
color: #666666;
display: flex;
`
const Text = styled(Sequencia)`
color: ${props => props.verde};
margin-left: 5px;
`
const BoxMarcado = styled.button`
width: 69px;
height: 69px;
background-color: ${props => props.marcado};
border: 1px solid #e7e7e7;
border-radius: 5px;
margin-left: 35px;
font-size: 55px;
display: flex;
aling-items: center;
justify-content: center;
cursor: pointer;
`
const Check = styled.p`
width: 36px;
height: 28px;
color: #ffffff;
cursor: pointer;
`