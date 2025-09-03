import "@/styles/globals.css";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 🌟 Global Title & Favicon */}
      <Head>
        <title>Layali Chocolates</title>
        <meta
          name="description"
          content="Best chocolate shop in Pakistan with premium quality chocolates"
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      {/* 🌟 Global Navbar */}
      <Navbar />

      <div>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  );
}
