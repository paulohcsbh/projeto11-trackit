import styled from "styled-components"

export default function DiasHabitos(props) {
    const { dia, tarefas, index } = props

    return (
        <Geral>
            <Dias marcado={tarefas.days.includes(index) ? "#cfcfcf" : "#ffffff"}> {dia} </Dias>
        </Geral>


    )
}
const Geral = styled.div`
display: flex;
`
const Dias = styled.p`
width: 30px;
height: 30px;
border: 1px solid #d4d4d4;
border-radius: 5px;
margin-right: 2px;
text-transform: uppercase;
display: flex;
align-items: center;
justify-content: center;
font-weight: 400;
font-size: 20px;
font-family: Lexend Deca;
color: #dbdbdb;
background-color: ${props => props.marcado};
cursor: pointer;
`