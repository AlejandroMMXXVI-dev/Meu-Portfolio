import '../styles/globals.css' // <-- Os dois pontos '..' são vitais aqui!

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}