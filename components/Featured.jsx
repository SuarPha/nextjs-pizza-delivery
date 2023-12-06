import styles from "../styles/Featured.module.scss";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import { useRouter } from 'next/router';

const Featured = () => {

  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter()

    const images = [
      "/img/pizza-featured.png",
      "/img/pizza-featured1.png",
      "/img/pizza-featured2.png",
    ];

  const handleArrow = (direction) => {
    if(direction === "l") {
      setIndex(index !== 0 ? index- 1 : 2)
    }
    if(direction === "r") {
      setIndex(index !== 2 ? index+ 1 : 0)
    }
  }

 
  const handleClick = (event) => {

    navigate(`/shop`);
  }


 // console to check if handleArrow function works

  return (
    <div className={styles.container}>
       <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowL.png"  alt="" layout="fill" objectFit="contain" sizes="200px" />
        </div>

        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
          <div className={styles.circle}> </div>
        {images.map((img, i) => (
           
              <div className={styles.imgContainer} key={i} >
              
              <div className={styles.heroContent}>
                  <h1> ENJOY TASTY, <br /> SPICY PIZZA <br /> BE HAPPY </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span>SEK 129</span>
               
                  <button onClick={() => router.push('/shop')}>Get Started</button> 
                  
              </div> 
              <Image src={img}  alt="" width={900} height={850}/* layout="fill" objectFit="contain" */ />
              
              </div>
            
          ))}
        
       </div>
         <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() =>handleArrow("r")}>
        <Image src="/img/arrowR.png" layout="fill" objectFit="contain"  alt=""  />
        </div>
    </div>
    
  )
}
// Fetch API:er
export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props:{
      pizza:res.data
    }
  }
}

export default Featured