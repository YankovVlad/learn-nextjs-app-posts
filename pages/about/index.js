import { useRouter } from "next/dist/client/router"
import { MainLayout } from "../../components/MainLayout"

export default function About ({data}) {
const router = useRouter()
const linkClickHandler = (path) => {
  router.push(path)
}

  return (
    <MainLayout title="About">
      <h1>{data.title}</h1>
      <button onClick={() => linkClickHandler('/')}>Go back to home</button>
      <button onClick={() => linkClickHandler('/posts')}>Go to posts</button>
    </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch(`http://localhost:4200/about`)
  const data = await response.json()
  return {data}
}