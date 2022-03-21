import "../styles/main.scss"
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="yellow"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      {/* One of way global css */}
      {/* <style jsx global>
      {`
        body {
          font-family: 'Montserrat', sans-serif;
        }
      `}
      </style> */}

    </>
  )
}