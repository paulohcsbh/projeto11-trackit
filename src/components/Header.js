import styled from "styled-components"
import { useContext } from "react"
import { FotoContext } from "../context/FotoContext"

export default function Header(){
    const {foto} = useContext(FotoContext)
    return(
        <>
        <Topo>
            <LogoNome>TrackIt</LogoNome>
            <Foto data-identifier="avatar" src={foto}></Foto>
        </Topo>
        </>
    )
}
const Topo = styled.div`
width: 375px;
height: 70px;
background-color: #126ba5;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 18px;
position: fixed;
top: 0;
left: 0;
z-index: 5;
`
const LogoNome = styled.h1`
width: 97px;
height: 49px;
color: #ffffff;
font-family: Playball;
font-weight: 400;
font-size: 39px;
margin-top: 10px;
`
const Foto = styled.img`
width: 51px;
height: 51px;
border-radius: 98.5px;
background-color: #ffffff;
`