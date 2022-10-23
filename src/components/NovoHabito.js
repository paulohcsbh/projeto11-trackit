import styled from "styled-components"
import DiasDaSemana from "./DiasDaSemana"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function NovoHabito(props) {
    const lista = ["d", "s", "t", "q", "q", "s", "s"]
    const { cancel, setCancel, setEstado, token } = props
    const [selecionados, setSelecionados] = useState([])
    const [reset, setReset] = useState(true)
    const [task, setTask] = useState("")
    const [desabilitar, setDesabilitar] = useState(false)
    const [loading, setLoading] = useState("Salvar")

    function addTask(e) {
        setDesabilitar(true)
        setLoading(<ThreeDots
            height="30"
            width="30"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />)
        selecionados.sort()
        e.preventDefault()
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/", { name: task, days: selecionados }, { headers: { "Authorization": `Bearer ${token}` }, })
        requisicao.then((a) => { setCancel(true); setSelecionados([]); setTask(""); setEstado(Math.random()); setReset(Math.random()); setLoading("Salvar"); setDesabilitar(false) })
        requisicao.catch(() => { alert("Falha no envio dos dados"); setLoading("Salvar"); setDesabilitar(false)})
    }

    function cancelar() {
        setCancel(true)
    }

    return (
        <>
            <Container display={cancel === true ? "none" : ""}>
                <NomeDoHabito data-identifier="input-habit-name" disabled={desabilitar} placeholder="nome do hábito" type="text" value={task} onChange={e => setTask(e.target.value)} required></NomeDoHabito>
                <ContainerDia>
                    {lista.map((dia, index) => <DiasDaSemana key={index} dia={dia} selecionados={selecionados} setSelecionados={setSelecionados} index={index} reset={reset}></DiasDaSemana>)}
                </ContainerDia>
                <ContainerBotoes>
                    <Cancelar data-identifier="cancel-habit-create-btn" onClick={cancelar}>Cancelar</Cancelar>
                    <Salvar data-identifier="save-habit-create-btn" onClick={addTask} >{loading}</Salvar>
                </ContainerBotoes>
            </Container>
        </>
    )
}
const Container = styled.div`
width: 340px;
height: 180px;
margin: 30px 17px;
background-color: #ffffff;
border-radius: 9px;
display: ${props => props.display}
`
const NomeDoHabito = styled.input`
width: 303px;
height: 45px;
margin: 18px 0 8px 19px;
padding-left: 11px;
font-weight: 400;
font-size: 20px;
font-family: Lexend Deca;
border-radius: 5px;
color: #dbdbdb;
border: 1px solid #d4d4d4;
`
const ContainerBotoes = styled.div`
width: 176px;
height: 35px;
margin: 36px 0 0 148px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Cancelar = styled.button`
font-family: Lexend Deca;
font-weigth: 400;
font-size 16px;
color: #52b6ff;
cursor: pointer;
border: transparent;
`
const Salvar = styled(Cancelar)`
width: 84px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
background-color: #52b6ff;
border-radius: 5px;
color: #ffffff;
`
const ContainerDia = styled.div`
width: 274px;
height: 30px;
margin-left 17px;
display: flex;
`