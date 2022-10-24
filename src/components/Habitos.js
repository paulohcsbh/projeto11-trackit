import styled from "styled-components"
import Header from "./Header"
import AddHabitos from "./AddHabitos"
import NovoHabito from "./NovoHabito"
import ListarHabitos from "./ListarHabitos"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function Habitos({ token }) {
    const [cancel, setCancel] = useState(true)
    const [minhasTasks, setMinhasTasks] = useState()
    const [estado, setEstado] = useState()

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", { headers: { "Authorization": `Bearer ${token}` }, })
        promise.then((resposta) => { setMinhasTasks(resposta.data) })
        promise.catch(erro => { console.log(erro.response.data) })
    }, [estado, token])

    if (minhasTasks === undefined) {
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
        <Geral>
            <Header />
            <AddHabitos setCancel={setCancel} />
            <NovoHabito cancel={cancel} setCancel={setCancel} setEstado={setEstado} token={token} />
            {minhasTasks.length === 0 ?
                <Mensagem data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Mensagem> :
                minhasTasks.map((tarefas) => (<ListarHabitos key={tarefas.id} tarefas={tarefas} setEstado={setEstado} token={token} ></ListarHabitos>)
                )}

            <Footer />
        </Geral>
    )    
}
const Geral = styled.div`
width: 375px;
height: 597px;
background-color: #e5e5e5;
padding-top: 30px;
overflow: auto;
`
const Mensagem = styled.p`
width: 338px;
height: 74px;
font-family: Lexend Deca;
font-weigth: 400;
font-size 18px;
color: #666666;
margin: 30px 17px;
`
const Loading = styled.div`
width: 375px;
height: 667px;
display: flex;
justify-content: center;
align-items: center;
`