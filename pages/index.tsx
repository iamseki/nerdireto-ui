import React, { useEffect } from 'react'
import { Container, Form } from "../styles/index";
import { GiRead } from 'react-icons/gi'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link'

const Home = () => {

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/room")
    ws.onopen = () => alert("socket conectado")

  }, [])

  return (
    <Container>
      <Form>
        <Link href="/blog">
          <Tooltip title="Escrever" arrow>
            <IconRead />
          </Tooltip>
        </Link>
        <input
          placeholder="O que você quer saber ?"
        />
        <Link href="/donate">
          <Tooltip title="Doar uns trocados" arrow>
            <IconMoney />
          </Tooltip>
        </Link>
      </Form>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
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

const IconMoney = React.forwardRef(function IconMoney(props, ref) {
  return (<div {...props} ref={ref as React.MutableRefObject<HTMLDivElement>}>
    <FaMoneyCheckAlt size="32" />
  </div>)
});

const IconRead = React.forwardRef(function IconRead(props, ref) {
  return (<div {...props} ref={ref as React.MutableRefObject<HTMLDivElement>}>
    <GiRead size="40" />
  </div>)
});


export default Home;