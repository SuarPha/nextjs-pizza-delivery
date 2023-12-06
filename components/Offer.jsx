import styles from "../styles/Offer.module.scss"
import Image from "next/image"

const Offer = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.heroContent}>
                  <h1> Little Rome Sky Mix Pizza </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <span>SEK 159</span>
                  <button>Order Now</button> 
              </div> 
         <div className={styles.imgContainer}  >
              
              <Image src="/img/pizza-offer.png" alt="" width="300" height="300"  />
              
              </div>
              
    </div>
    
  )
}

export default Offer