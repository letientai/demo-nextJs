import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'
import "../styles/productDetail.scss"
import "../styles/card.scss"
import "../styles/home.scss"
import "../styles/footer.scss"
import "../styles/navbar.scss"
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
