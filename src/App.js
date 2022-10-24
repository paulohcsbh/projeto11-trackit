import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Cadastrar from "./components/Cadastrar";
import Habitos from "./components/Habitos";
import Hoje from "./components/Hoje";
import Historico from "./components/Historico";
import { useState } from "react";


function App() {
  const [token, setToken] = useState("")
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken}/>} />
        <Route path="/cadastrar" element={<Cadastrar />} />        
        <Route path="/habitos" element={<Habitos token={token} />} />
        <Route path="/hoje" element={<Hoje token={token} />} />
        <Route path="/historico" element={<Historico/>}/>
      </Routes>
    </BrowserRouter>




  );
}

export default App;
