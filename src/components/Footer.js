import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { useContext } from "react";
import { ProgressbarContext } from "../context/ProgressbarContext";
export default function Footer() {
    const navigate = useNavigate()
    const { done } = useContext(ProgressbarContext)
    function habitos() {
        navigate("/habitos")
    }
    function hoje() {
        navigate("/hoje")
    }
    function historico() {
        navigate("/historico")
    }
    return (
        <>
            <Rodape>
                <Habitos data-identifier="habit-page-action" onClick={habitos}>Hábitos</Habitos>
                <Hoje onClick={hoje}>
                    <div style={{ width: "81px", height: "81px", background: "#52b3ff", borderRadius: "100px" }}>
                        <CircularProgressbar
                            value={done}
                            text={"Hoje"}
                            styles={buildStyles({ textColor: "white", trailColor: "#52b3ff", pathColor: "white", textSize: "24px" })}
                        />
                    </div>
                </Hoje>
                <Historico data-identifier="historic-page-action" onClick={historico} >Histórico</Historico>
            </Rodape>
        </>
    )
}

const Rodape = styled.div`
width: 375px;
height: 70px;
background-color: #ffffff;
border: 1px solid lightgray;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 18px;
position:fixed;
bottom: 0;
left:0;
padding: 0 36px;
`
const Habitos = styled.p`
width: 68px;
height: 22px;
color: #52b6ff;
font-weight: 400;
font-family: Lexend Deca;
font-size: 18px;
cursor: pointer;
`
const Historico = styled(Habitos)`
`
const Hoje = styled(Habitos)`
width: 91px;
height:91px;
background-color: #52b6ff;
color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100px;
margin-bottom: 50px;
z-index: 5;
`