import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Nerdireto</title>
    </Head>
    <div style={{display:'flex', alignItems:'center',justifyContent:'center', marginTop:100}}>
    <img 
      src="/codingws.svg"
      alt="codingws"
      height="400"
      width="400"
    />
    </div>
  </div>
)

export default Home;