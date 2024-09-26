import Head from 'next/head';
import Carrito from './carrito';
import About from '../components/About';
import Location from '../components/Location';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Img from '../components/Img';

export default function Home() {
 
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
        <title>Vestire</title>
        <link rel="stylesheet" href="/css/main.css" />
      </Head>

      <Header />

      <Form />

      <Carrito />
      
      <About />

      <Img />

      <Location />

      <Footer /> 
    </>
  );
}
