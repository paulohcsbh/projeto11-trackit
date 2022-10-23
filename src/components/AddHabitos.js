import styled from "styled-components"
export default function AddHabitos(props) {
    const { setCancel } = props
    function add() {
        setCancel(false)
    }
    return (
        <ContainerAdd>
            <MeusHabitos>Meus hábitos</MeusHabitos>
            <AddHabito data-identifier="create-habit-btn" onClick={add}>+</AddHabito>
        </ContainerAdd>
    )

}
const ContainerAdd = styled.div`
width: 357px;
height: 34px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 80px 0 0 17px;
margin-bottom: 30px;
`
const MeusHabitos = styled.p`
width: 178px;
height: 29px;
font-family: Lexend Deca;
font-weight: 400;
font-size: 23px;
color: #126ba5;
margin-top: 5px;
`
const AddHabito = styled.button`
width: 40px;
height: 34px;
background-color: #52b6ff;
border-radius: 5px;
font-size: 25px;
color:#ffffff;
border: transparent;
cursor: pointer;
`