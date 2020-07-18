import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Form, SearchBox } from "../styles/index";
import { GiRead } from 'react-icons/gi'
import { FcMoneyTransfer } from 'react-icons/fc'
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  const [input, setInput] = useState("")

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/room")
    ws.onopen = () => alert("socket conectado")

  }, [])

  return (
    <>
      <Head>
        <meta name="og:description" content="Sendo Nerdireto e reto sem enrolamento, venha disseminar o conhecimento !" />
        <meta name="description" content="Sendo Nerdireto e reto sem enrolamento, venha disseminar o conhecimento !" />
      </Head>
      <Container>
        <Form>
          <Link href="/blog">
            <Tooltip title="Escrever" arrow>
              <IconRead />
            </Tooltip>
          </Link>
          <input
            placeholder="O que você quer saber ?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Link href="/donate">
            <Tooltip title="Doar uns trocados" arrow>
              <IconMoney />
            </Tooltip>
          </Link>
        </Form>
        <SearchBox>
          {
            input ? (<>
              <CircularProgress color="secondary" />
              <h2>Em desenvolvimento &#x1F4BB;</h2>
              <Link href="/blog">
                Acesse o Blog
              </Link>
            </>) : (<img
              src="/index.svg"
              alt="searching"
              height="400"
              width="400"
            />)
          }
        </SearchBox>
      </Container>
    </>
  )
}

const IconMoney = React.forwardRef(function IconMoney(props, ref) {
  return (<div {...props} ref={ref as React.MutableRefObject<HTMLDivElement>}>
    <FcMoneyTransfer size="40" />
  </div>)
});

const IconRead = React.forwardRef(function IconRead(props, ref) {
  return (<div {...props} ref={ref as React.MutableRefObject<HTMLDivElement>}>
    <GiRead size="40" />
  </div>)
});


export default Home;