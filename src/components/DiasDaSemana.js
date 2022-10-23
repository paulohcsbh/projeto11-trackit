import styled from "styled-components"
import { useEffect, useState } from "react"
export default function DiasDaSemana(props) {
    const { dia, selecionados, setSelecionados, index, reset } = props
    const [colorir, setColorir] = useState(true)

    useEffect(() => { setColorir(true) }, [reset])
    function qualClicado() {
        if (colorir === true) {
            setColorir(false)
            const dias = [...selecionados, index]
            setSelecionados(dias)
        } else {
            setColorir(true)
        }
        selecionados.splice(selecionados.indexOf(index), 1)
    }
    return (
        <Geral>
            <Container>
                <Dia data-identifier="week-day-btn" onClick={() => qualClicado()} marcado={colorir === true ? "#ffffff" : "#cfcfcf"}  >{dia}</Dia>
            </Container>
        </Geral>

    )
}
const Geral = styled.div`
display: flex;
`
const Container = styled.div`
width: 30px;
height: 30px;
border-radius: 5px;
display: flex;
`
const Dia = styled.p`
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