import { NotionRenderer } from "react-notion";
import { withRouter, NextRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/post'
import CircularProgress from '@material-ui/core/CircularProgress';
import Head from 'next/head'

interface Props {
  router: NextRouter
}

const Post = ({ router }: Props) => {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  const [description, setDescription] = useState("")

  useEffect(() => {
    if (!router.query.id)
      return
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

  }, [router])

  const formatQueryDescription = (): string => {
    let d = router.asPath.split("description=")[1].trim()
    d = d.replace(/-/g, ' ')
    d = d.replace(/%22/g, '"')
    return d
  }

  return (
    <>
      <Head>
        <title>Blog – Nerdireto</title>
        <meta name="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="og:title" content="Post – Nerdireto" />
        <meta property="og:url" content={`https://nerdireto.com.br/post/${router.query.id + router.asPath}`} />
      </Head>
      <Container>
        {loading ? <CircularProgress /> : <NotionRenderer blockMap={post} />}
      </Container>
    </>
  )
};

export default withRouter(Post)