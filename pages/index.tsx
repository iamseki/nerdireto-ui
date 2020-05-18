import { Container, Form } from "./styles";
import { GiRead } from 'react-icons/gi'
import { FaMoneyCheckAlt } from 'react-icons/fa'
const Home = () => (
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

export default Home;