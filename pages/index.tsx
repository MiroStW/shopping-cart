import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Nav from "../components/Nav";
import style from "../styles/app.module.css";

const App: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shopping cart app</title>
      </Head>
      {/* Start Single Page Apps for GitHub Pages */}
      {/* // Single Page Apps for GitHub Pages
            // MIT License
            // https://github.com/rafgraph/spa-github-pages
            // This script checks to see if a redirect is present in the query string,
            // converts it back into the correct url and adds it to the
            // browser's history using window.history.replaceState(...),
            // which won't cause the browser to attempt to load the new url.
            // When the single page app is loaded further down in this file,
            // the correct url will be waiting in the browser's history for
            // the single page app to route accordingly. */}
      <Script
        id="spa-github-pages"
        src="https://rafgraph.github.io/spa-github-pages/spa-github-pages.js"
      >
        <>
          dangerouslySetInnerHTML=
          {{
            __html: `
            (function (l) {
              if (l.search[1] === "/") {
                var decoded = l.search
                  .slice(1)
                  .split("&")
                  .map(function (s) {
                    return s.replace(/~and~/g, "&");
                  })
                  .join("?");
                window.history.replaceState(
                  null,
                  null,
                  l.pathname.slice(0, -1) + decoded + l.hash
                );
              }
            })(window.location);
            `,
          }}
        </>
      </Script>
      {/* End Single Page Apps for GitHub Pages */}

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

    // <Route path={`/`} element={<Main />} />

    //   <Route
    //     path={`/products`}
    //     element={
    //       <Products
    //         ids={Array.from({ length: 10 }, () =>
    //           Math.floor(Math.random() * 897 + 1)
    //         )}
    //       />
    //     }
    //   />
    //   <Route path={`/products/:id`} element={<ProductDetails />} />

    //   <Route path={`/cart`} element={<Cart />} />
  );
};

export default App;
