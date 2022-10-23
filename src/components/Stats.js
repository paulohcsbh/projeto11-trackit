import styled from "styled-components"
import Vector1 from "../assets/img/Vector 1.png"
import Vector2 from "../assets/img/Vector 2.png"
import Vector3 from "../assets/img/Vector 3.png"
import Vector4 from "../assets/img/Vector 4.png"
import ellipse from "../assets/img/Ellipse 3.png"
export default function Stats() {
    return (
        <>
            <ContainerImg>
                <Image1 src={Vector1} alt="Logo"></Image1>
                <Image2 src={Vector2} alt="Logo"></Image2>
                <Image3 src={Vector3} alt="Logo"></Image3>
                <Image4 src={Vector4} alt="Logo"></Image4>
                <Ellipse src={ellipse}></Ellipse>
                <LogoNome>TrackIt</LogoNome>
            </ContainerImg>
        </>
    )
}
const ContainerImg = styled.div`
width: 180px;
height: 178.38px;
border: 1px solid #ffffff;
postion: relative;
margin: 68px 0 0 97px;
`
const Image1 = styled.img`
width: 18.05px;
height: 22.63px;
position: absolute;
top: 87.5px;
left: 148.2px;
`
const Image2 = styled.img`
width: 18.05px;
height: 42.31px;
position: absolute;
top:79.05px;
left: 172.45px;
`
const Image3 = styled.img`
width: 18.05px;
height: 63.32px;
position: absolute;
top:68px;
left: 197.24px;
`
const Image4 = styled.img`
width: 154.95px;
height: 48.5px;
position: absolute;
top:106.8px;
left:109.4px;
z-index: 4;
`
const Ellipse = styled.img`
width: 142.28px;
height: 15.65px;
position: absolute;
top:141.53px;
left: 123.33px;
color: #e6e7e8;
`
const LogoNome = styled.h1`
font-weight: 400;
font-size: 69px;
font-family: Playball;
margin-top: 92.16px;
color: #126ba5;
`