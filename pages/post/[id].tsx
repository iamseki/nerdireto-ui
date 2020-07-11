import { NotionRenderer } from "react-notion";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/post'

const Post = () => {
  const [post,setPost] = useState({})
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      return await fetch(
        `https://notion-api.splitbee.io/v1/page/${router.query.id}`
      ).then(res => res.json())
    }

    fetchData().then(data => setPost(data));

  }, [])


  return (
    <Container>
      <NotionRenderer blockMap={post} />
    </Container>
  )
};

export default Post