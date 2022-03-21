import classes from "../styles/posts.module.scss"
import { MainLayout } from "../components/MainLayout"
import Link from "next/link"
import { useEffect, useState } from "react"
export default function Posts ({posts: serverPosts}) {
  const [posts, setPosts] = useState(serverPosts)

  const load = async () => {
    const response = await fetch('http://localhost:4200/posts')
    const data = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  } else {
    return (
      <MainLayout title="Posts">
        <h1>Posts</h1>
  
        <ul className={classes.posts}>
          {posts.map(post => {
            return (
              <li key={post.id} className={classes.posts__item}>
                <Link href={`/post/${post.id}`}>
                  <a className={classes.posts__link}>
                    <h4>{post.title}</h4>
                  </a>
                </Link>
              </li>
            )
          })}
  
        </ul>
      </MainLayout>
    )
  }
  
}

Posts.getInitialProps = async ({req}) => {
  if (!req) {
    return {posts: null}
  } else {
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    return {posts}
  }
}
