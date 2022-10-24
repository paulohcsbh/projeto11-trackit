import axios from "axios"
import styled from "styled-components"
import Lixo from "../assets/img/Vector.png"
import DiasHabitos from "./DiasHabitos"
export default function ListarHabitos(props) {
    const { tarefas, setEstado, token,setAtualiza } = props
    const lista = ["d", "s", "t", "q", "q", "s", "s"]

    function deletar(id) {
        if (window.confirm("Deletar hábito?")) {
            const del = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, { headers: { "Authorization": `Bearer ${token}` }, })
            del.then(() => { setEstado(Math.random()); setAtualiza(Math.random()) })
            del.catch(erro => { console.log(erro.response.data) })
            
        }
        
    }

    return (
        <>
            <Container>
                <NomeTarefa data-identifier="habit-name">{tarefas.name}</NomeTarefa>
                <ContainerDias>
                    {lista.map((dia, index) => <DiasHabitos key={index} dia={dia} index={index} tarefas={tarefas} >
                    </DiasHabitos>)}
                </ContainerDias>
                <Apagar data-identifier="delete-habit-btn"  onClick={() => deletar(tarefas.id)} src={Lixo} alt="Lata de lixo"></Apagar>
            </Container>
        </>
    )
}

const Container = styled.div`
width: 340px;
height: 91px;
margin: 0 0 10px 17px;
background-color: #ffffff;
border-radius: 9px;
padding-top: 13px;
position: relative;
`
const NomeTarefa = styled.p`
width: 208px;
height: 25px;
font-weight: 400;
font-size: 20px;
font-family: Lexend Deca;
border-radius: 5px;
color: #dbdbdb;
margin-left: 17px;
word-wrap: break-word;
overflow: auto;
`
const Apagar = styled.img`
width: 13px;
height: 15px;
position: absolute;
top: 11px;
left: 303px;
cursor: pointer;
`
const ContainerDias = styled.div`
width: 275px;
height: 30px;
border-radius: 5px;
display: flex;
margin-left: 17px;
`