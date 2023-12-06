import styles from "../styles/PizzaCard.module.scss"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";


const PizzaCard = ({pizza}) => { // <-- prop here
  const [price, setPrice] = useState(pizza.prices[0]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
}
  
const handleClick = ()=>{
  dispatch(addProduct({...pizza, quantity: 1}));
};

  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
      <Image src={pizza.img} alt="" width="200" height="200"/>
      </Link>
 
     <h1 className={styles.title}>{pizza.title}</h1>
    <span className={styles.price}>{pizza.prices} Kr</span>
    <p className={styles.desc}> 
      {pizza.desc}
    </p>
    <Link href={`/product/${pizza._id}`} passHref>
    <button className={styles.button}>Order
      
    </button>
    </Link>
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
export default PizzaCard