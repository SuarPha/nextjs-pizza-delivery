import styles from "../../styles/Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.wrapper}>
        <h1>MENU</h1>
            <h3>WHAT’S SPECIAL!</h3>
            <hr/>
          
   <div className={styles.item}>       
            <span> PERSONAL </span>
               <p>1 TOPPING SEK 129.00 ———- UNLIMITED SEK 149.00 <br/>
              <span> MEDIUM </span>
              <p>1 TOPPING SEK 119.00 ———- UNLIMITED SEK 149.00 </p><br/>
              <span> GLUTEN FREE  </span>
              <p>1 TOPPING SEK 129.00 ———- UNLIMITED SEK 159.00</p> <br/>
              <span> CALZONE </span>
              <p>3 TOPPING : SEK 15.00———– 5 TOPPING : SEK 20.00</p> <br/>
  </p>
</div> 
  <hr/>
 <div className={styles.item}>
    <p className={styles.text}>
      <span>SELECT YOUR SAUCE</span> 
   <p> MARINARA <br/>
   BIANCO (GARLIC BUTTER SAUCE)  <br/>
   PESTO  <br/>
   GARLIC PARMESAN ALFREDO  <br/>
   COMBO  <br/>
   CHOOSE YOUR CHEESE  <br/>
   MOZZARELLA, RICOTTA, FETA, GOAT  <br/></p> 
    </p>
 </div>
  <hr/>
 <div className={styles.item}>
    <span> PICK YOUR FRESH VEGGIES </span>
    <p className={styles.text}>
    BABY ARUGULA /   <br/>
    TOMATOES / ARTICHOKE /   <br/>
    SPINACH / GREEN PEPPERS /   <br/>
    BASIL / RED ONIONS /   <br/>
    MUSHROOMS / ROASTED RED PEPPERS /   <br/>
    YELLOW PEPPERS / BLACK OLIVES /   <br/>
    GREEN OLIVES / JALAPEÑOS /   <br/>
    GARLIC / PINEAPPLE / SUN DRIED   <br/>
    </p>
 </div>
  <hr/>
 <div className={styles.item}>
    <span> SALADS </span>
    <p>
    SERVED WITH GARLIC TOASTINI / <br/>
    ADD CHICKEN SEK 39.00
    </p>
    <p>
    CASA SALAD SEK 99.00
    </p>
    <span>Fresh Romaine lettuce topped with cucumber, carrots, tomato, and red onion. served with your choice of Ranch, Italian, or Raspberry Vinaigrette.
</span>
   <p> CAESAR SEK 99.00</p>
    <span>Fresh romaine lettuce topped with garlic croutons and grated parmesan cheese.</span>
 </div>
  <hr/>
 <div className={styles.item}>
    <span>BREADED FRIED CHICKEN WINGS </span>
    <p>YOUR CHOICE OF PLAIN, DRY RUB SEASONING, <br/> 
               LEMON PEPPER SEASONING, BUFFALO, <br/> 
               HOMEMADE BUFFALO RANCH, GARLIC PARMESAN, <br/>
               HONEY BBQ, BBQ SAUCE, HOMEMADE GARLIC PESTO, <br/>
               HOMEMADE ASIAN MAPLE GLAZE, HOMEMADE HABANERO MANGO,<br/>
               HOMEMADE GARLIC PARMESAN ALFREDO, <br/> 
               HOMEMADE SPICY DYNAMITE SAUCE, OR OUR HOMEMADE SRIRACHA HONEY
      <p>      8 WINGS:
               SEK 99.-
               10 WINGS:
               SEK 109.-
               12 WINGS:
               SEK 129.- </p>    
    </p>
 </div>
 <div className={styles.item}>
 <hr/>
 <span>SPECIALTY PIES</span>

 <p>ALL SPECIALTY PIZZAS MADE WITH MOZZARELLA CHEESE</p>
 <p>No Substitutions or additional toppings</p>
 <p>PERSONAL 10″</p>
 </div>
    </div>
        
    </div>
  )
}

export default Menu