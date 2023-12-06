import styles from "../styles/PizzaList.module.scss"
import PizzaCard from "./PizzaCard"


const PizzaList = ({pizzaList}) => {

  return (
    <div className={styles.container}>
                <h2 className={styles.title}> SELECTED PIZZAS </h2>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</p>
         
                <hr />

                 <div className={styles.wrapper}> 
                    {pizzaList?.map((pizza) => (
                      <PizzaCard key={pizza._id} pizza={pizza}/>
                    ))} 
                 </div>     
    </div>
  )
}

export default PizzaList
