import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import style from "../styles/app.module.css";

const App = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shopping cart app</title>
      </Head>
      <Nav />
      <div id={style.container}>
        <p>
          This is the homepage of an awesome online shop! We&apos;ve got a great
          name & slogan:
        </p>
        <div>
          <Image
            src="/images/shop_logo.jpeg"
            width="600"
            height="429"
            className={style.amazingLogo}
          />
        </div>
      </div>
    </>
  );
};

export default App;
