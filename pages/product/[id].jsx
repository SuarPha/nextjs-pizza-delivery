import styles from "../../styles/Product.module.scss";
import Image from "next/image";
import { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";



const Product = ({pizza}) => {
    const [price, setPrice] = useState(pizza.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price + number);
    }

    const handelSize = (sizeIndex)=>{  // Functions that setting size for the pizza
        const sizeSet = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex); // Set size that being from one
        changePrice(sizeSet);  // Update size and price
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked;

        if(checked){  // If the exta option is choosed then set exta price.
            changePrice(option.price)
            setExtras((prev) => [...prev, option]); // Alternative to write [...extras, option] it works too. :)
        }else {
            changePrice(-option.price)
            setExtras(extras.filter((extra) => extra._id !== option._id));
        }
    }
   
    const handleClick = ()=>{
        dispatch(addProduct({...pizza, extras, price, quantity}));
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                    <Image src={pizza.img} objectFit="contain" layout="fill" alt=""/>
            </div>
        </div>
        <div className={styles.right}>
            <h1  className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>{price} Kr</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>

                {/* Onclick functions to update the prices and sizes */}
                <div className={styles.size} onClick={()=>handelSize(0)} > 
                       <Image src="/img/size.png" layout="fill" alt="" /> 
                       <span className={styles.sizeChoose}>Small</span>            
                </div>
                <div className={styles.size} onClick={()=>handelSize(1)}>
                       <Image src="/img/size.png" layout="fill" alt="" /> 
                       <span className={styles.sizeChoose}>Medium</span>            
                </div>
                <div className={styles.size} onClick={()=>handelSize(2)}>
                       <Image src="/img/size.png" layout="fill" alt="" /> 
                       <span className={styles.sizeChoose}>Large</span>            
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>

           {/* Call back components uses for this functions */}
            <div className={styles.ingredients}>
                {pizza.extraOptions.map(option => (
                <div className={styles.option} key={option._id}>
                    <input 
                    type="checkbox"
                    id={option.text} name={option.text}
                    className={styles.checkbox} 
                    onChange={(e) => handleChange(e, option)} // Prices will be change by clicking the extra option.
                    />
                    <label htmlFor="double">{option.text}</label>
                </div>
               ))}
            </div>
            <div className={styles.add}>
                    <input onChange={(e)=> setQuantity(e.target.value)}
                     type="number" 
                     defaultValue={1} 
                     className={styles.quantity}/>
                    <button className={styles.button} onClick={handleClick}>Order Now</button>
            </div>
        </div>
    </div>
  )
};
// Fetch API:er
export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
      props:{
        pizza:res.data
      }
    }
  }

export default Product