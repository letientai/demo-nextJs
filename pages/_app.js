// import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/productDetail.scss"
import "../styles/card.scss"
import "../styles/home.scss"
import "../styles/footer.scss"
import Layout from "../components/layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
