import { GetStaticProps } from 'next'
import Card from '../components/Card'

interface Props {
  posts: Post[]
}
interface Post {
  id: string;
  tags: string[];
  imageUrl: string;
  description: string;
}

const Blog = ({ posts }: Props) => {

  return (
    <div>
      {posts.map(p => <Card id={p.id} description={p.description} tags={p.tags} imageUrl={p.imageUrl} />)}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch('https://notion-api.splitbee.io/v1/table/d5fe857e5cb04182b0c78c302bb4fd38?v=f148e891fc3549d0ad8ad5b88109a39b')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog