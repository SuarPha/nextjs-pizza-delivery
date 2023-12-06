import styles from "../styles/Newsletter.module.scss";
import Image from "next/image"

const Newsletter = () => {
  return (
    <div className={styles.container}>
        
            <h1 className={styles.title}> Newsletter </h1>
            <div className={styles.desc}> Get timly from your favorite pizzas</div>
            <div className={styles.inputContainer}>

                    <input className={styles.input} type="text"  placeholder="Your email" />
                    <button className={styles.button}>
                       <Image src="/img/send.png" width={50} height={50} alt="" />
                    </button>
               
            </div>

        
    </div>
  )
}

export default Newsletter