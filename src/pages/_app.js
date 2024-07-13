import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/Nav/NavBar';
import '../styles/TrendingBox.css';
import '../styles/globals.css';
import { GlobalContextProvider } from '../Context/store'

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalContextProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default App;
