import axios, { spread } from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/Featured';
import Offer from '../components/Offer';
import Service from '../components/Services';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import AddButton from '../components/AddButton';
import Add from '../components/Add';
import Newsletter from '../components/Newsletter';


export default function Home({ pizzaList, admin} ) {

  const [close, setClose] = useState(true);

  return (
    
    <div className={styles.container}>

      <Head>
        <title>Online Pizzarie</title>
        <meta name="description" content="Best pizza restaurant in Järna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/> }
      {/* <Offer/>  
      <Service/> */}
      <PizzaList pizzaList={pizzaList} />
      {/* If it's not close call another component */}
      {!close && <Add setClose={setClose} /> } 
    
      < Newsletter/>
      </div>

  );
}
// Fetch API:er
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if(myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props:{
      pizzaList:res.data,
      admin,
    }
  }
}