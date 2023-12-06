import styles from "../../styles/Shop.module.scss";
import PizzaCard from "../../components/PizzaCard";
import axios from "axios";



const Shop = ({shop}) => {
  return (
    <div className={styles.container}>
        
                <h1 className={styles.title}> OUR PIZZAS </h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet,  consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr />
                 <div className={styles.wrapper}> 
                    {shop?.map((pizza) => (
                      <PizzaCard key={pizza._id} pizza={pizza}/>
                    ))} 
                 </div>     
    </div>
  )
}
// Fetch API:er
export const getServerSideProps = async () => {
const res = await axios.get("http://localhost:3000/api/products");
  return {
    props:{
      shop:res.data
    }
  }
}
export default Shop