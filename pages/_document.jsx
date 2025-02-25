import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Initially, the TpC bot was meant to be integrated with ChatGPT, allowing users to receive AI-driven responses to their queries. However, this idea was later abandoned, shifting the focus toward developing features more tailored to Discord users’ needs. This change allowed TpC to evolve into a versatile tool, capable of automating various tasks, supporting gaming and social interactions, and helping communities engage more effectively."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@tpc" />
          <meta name="twitter:creator" content="@tpc" />
          <meta property="og:url" content="https://top.gg/bot/1196199588558819449" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="tpc" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Initially, the TpC bot was meant to be integrated with ChatGPT, allowing users to receive AI-driven responses to their queries. However, this idea was later abandoned, shifting the focus toward developing features more tailored to Discord users’ needs. This change allowed TpC to evolve into a versatile tool, capable of automating various tasks, supporting gaming and social interactions, and helping communities engage more effectively."
          />
          <meta property="og:image" content="/img/logo2.jpg" />
          <meta property="og:image:alt" content="TpC" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="TpC"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/logo2.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
