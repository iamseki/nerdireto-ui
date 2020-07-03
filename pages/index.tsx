import React , { useRef, useEffect } from 'react'
import { Container, Form } from "../styles/index";
import { GiRead } from 'react-icons/gi'
import { FaMoneyCheckAlt } from 'react-icons/fa'

const Home = () => {


  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/room")
    ws.onopen = () => alert("socket conectado")


    },[])

  return (
    <Container>
      <Form>
        <GiRead size="40"/>
        <input
            placeholder="O que você quer saber ?"
        />
        <FaMoneyCheckAlt size="32"/>
      </Form>
      <div style={{display:'flex', alignItems:'center',justifyContent:'center', marginTop:50}}>
      <img 
        src="/codingws.svg"
        alt="codingws"
        height="400"
        width="400"
      />
      </div>
    </Container>
  )
}


export default Home;