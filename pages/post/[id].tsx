import { NotionRenderer } from "react-notion";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/post'
import CircularProgress from '@material-ui/core/CircularProgress';
import Head from 'next/head'

const Post = () => {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const [description, setDescription] = useState("")

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
    
    setDescription(formatQueryDescription())

  }, [])

  const formatQueryDescription = ():string => {
    let d = router.asPath.split("description=")[1].trim()
    d = d.replace(/%20/g,' ')
    d = d.replace(/%22/g,'"')
    return d
  }

  return (
    <>
      <Head>
        <title>Blog – Nerdireto</title>
        <meta name="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="og:title" content="Post – Nerdireto" />
        <meta property="og:url" content={`https://nerdireto.com.br/post/${router.query.id+router.asPath}`} />
      </Head>
      <Container>
        {loading ? <CircularProgress /> : <NotionRenderer blockMap={post} />}
      </Container>
    </>
  )
};

export default Post