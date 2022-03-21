import { useRouter } from "next/router"
import { MainLayout } from "../../components/MainLayout"
import classes from "../../styles/post.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Post ({post: serverPost}) {

  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  const load = async () => {
    const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
    const data = await response.json()
    setPost(data)
  }

  useEffect(() => {
    if (!serverPost) {
      load()
    }
  },[])

  if(!post) {
    return (
    <MainLayout>
      <p>Loading...</p>
    </MainLayout>
    )
  } else {
    return (
      <MainLayout title="Post">
        <h1>{post.title} </h1>
        <p className={classes.text}>{post.body}</p>
        <Link href="/posts" className={classes.link_item}><a className={classes.link}>To posts</a></Link>
      </MainLayout>
    )
  }
 
}

Post.getInitialProps = async ({query, req}) => {
  if (!req) {
    return {post: null}
  } else {
    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await response.json()
    return {post}
  }
}

// export async function getServerSideProps ({query}) {
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await response.json()
//     return {props: {post}}
// }