import { GetServerSideProps } from 'next'
import Card from '../components/Card'
import { Container } from '../styles/blog'

interface Props {
  posts: Post[]
}
interface Post {
  id: string;
  tags: string[];
  imageUrl: string;
  description: string;
  status: string;
}

const Blog = ({ posts }: Props) => {

  return (
    <Container>
      {posts.map(p => p.status === "done" && <Card key= {p.id} id={p.id} description={p.description} tags={p.tags} imageUrl={p.imageUrl} />)}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const res = await fetch('https://notion-api.splitbee.io/v1/table/d5fe857e5cb04182b0c78c302bb4fd38?v=f148e891fc3549d0ad8ad5b88109a39b')
  const posts = await res.json()

  return { props: { posts } }
}

export default Blog