import Link from "next/link"
import Head from "next/head"
import classes from "../styles/mainLayout.module.scss"

export const MainLayout = ({children,title ='Next app'}) => {
  return (
    <>
      <Head>
        <title>{title} | Next learning</title>
        <meta name="keywords" content="next.js, javascript, react"/>
        <meta name="description" content="this is learning next.js"/>
        <meta charSet="utf-8" />
      </Head>
      <nav className={classes.nav}>
        <Link href={'/'}>
          <a className={classes.nav__link}>Home</a> 
        </Link>

        <Link href={'/about'}>
          <a className={classes.nav__link}>About</a> 
        </Link>

        <Link href={'/posts'}> 
          <a className={classes.nav__link}>Posts</a> 
        </Link>
        <Link href={'/about/author'}> 
          <a className={classes.nav__link}>Author</a> 
        </Link>
      </nav>

      <main className={classes.main}>
        {children}
      </main>

        {/* One of ways css */}
      {/* <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            padding-inline: 2rem;
            background: darkgrey;
          }
          nav a {
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
            height: 100%;
            min-width: 6rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            transition: all 0.3s ease
          }
          nav a:hover {
            background-color: white;
            color: black;
          }
          main {
            padding-block: 1rem
            padding-inline: 2rem;
            margin-top: 60px;
          }
        `}

      </style> */}
    </>
  ) 
}