import { NotionRenderer } from "react-notion";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/post'
import CircularProgress from '@material-ui/core/CircularProgress';

const Post = () => {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      return await fetch(
        `https://notion-api.splitbee.io/v1/page/${router.query.id}`
      ).then(res => res.json())
    }

    fetchData().then(data => {
      setPost(data)
      setLoading(false)
    });

  }, [])

  return (
    <Container>
      {loading ? <CircularProgress /> : <NotionRenderer blockMap={post} />}
    </Container>
  )
};

export default Post