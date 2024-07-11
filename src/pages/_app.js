import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/Nav/NavBar';
import '../styles/TrendingBox.css';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
