import Header from '../components/header'
import '../styles/globals.css'
import '../styles/Nav.css'
import '../styles/about.css'
import '../styles/project.css'
import '../styles/services.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Header />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
