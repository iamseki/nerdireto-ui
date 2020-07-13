import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '../components/Card'
import { Container, LoadingBox } from '../styles/blog'
import useSWR from 'swr'
import Head from 'next/head'

interface Post {
  id: string;
  tags: string[];
  imageUrl: string;
  description: string;
  status: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Blog = () => {
  const { data, error } = useSWR("https://notion-api.splitbee.io/v1/table/d5fe857e5cb04182b0c78c302bb4fd38?v=f148e891fc3549d0ad8ad5b88109a39b", fetcher)

  if (!data) return (<LoadingBox> <CircularProgress color="secondary" /> </LoadingBox>)
  
  return (
    <>
    <Head>
        <title>Blog – Nerdireto</title>
        <meta name="og:description" content="nerdireto blog, posts diretos sem enrolamento venha compartilhar o conhecimento !" />
        <meta name="description" content="nerdireto blog, posts diretos sem enrolamento venha compartilhar o conhecimento !" />
        <meta property="og:url" content="https://nerdireto.com.br/blog"/>
        <meta property="og:title" content="Blog – Nerdireto"/>
    </Head>
    <h1 hidden>nerdireto blog, posts diretos sem enrolamento venha compartilhar o conhecimento !"</h1>
    <Container>
      {data.map((p: Post) => p.status === "done" && <Card key={p.id} id={p.id} description={p.description} tags={p.tags} imageUrl={p.imageUrl} />)}
    </Container>
    </>
  )
}

export default Blog