import { NotionRenderer } from "react-notion";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Post = () => {
  const [post,setPost] = useState({})
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      return await fetch(
        `https://notion-api.splitbee.io/v1/page/${router.query.pid}`
      ).then(res => res.json())
    }

    fetchData().then(data => setPost(data));

  }, [])


  return (
    <div style={{ marginTop: 50, padding: 17, margin: 24 }}>
      <NotionRenderer blockMap={post} />
    </div>
  )
};

export default Post