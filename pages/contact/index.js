import styles from "../../styles/Contact.module.scss";
import React, { useState } from "react";

const ContactForm = ()=> {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleOnSubmit = (e) => {
      e.preventDefault()
    }
    const handleChange = (e) => {
      if(e.taget.name == 'name') {
        setName(e.target.value)
      }
      if(e.taget.email == 'email') {
        setEmail(e.target.value)
      }
      if(e.taget.subject == 'subject') {
        setSubject(e.target.value)
      }
      if(e.taget.message == 'message') {
        setMessage(e.target.value)
      }
      console.log(e)
    }
  
   return (
    <div className={styles.container}>
        
             <div className={styles.main}>
            <h1 className={styles.title}>Get in touch</h1>
            <p className={styles.text}>
            We'd love to hear from you!
          </p>
            <hr/>
        
          <div className={styles.inputContainer}>
          <form  method="POST" className={styles.form} onSubmit={handleOnSubmit}>
              <div className={styles.fieldNameBox}>
                <label className={styles.label} htmfor="name">Name:</label> 
                <input 
                id="name"
                 type="text" 
                 value={name}
                 
                 name="name" 
                 placeholder="Enter your name"
                className={styles.input}  />
              </div>
              <div  className={styles.fieldEmailBox}>
                <label className={styles.label} htmfor="email">Email:</label>
                <input 
                 id="email"
                 type="email"
                 value={email}
                  name="email"
                  placeholder="Enter your email"
                className={styles.input}  />
              </div>
              <div  className={styles.fieldEmailBox}>
                <label className={styles.label} htmfor="email">Subject:</label>
                <input 
                 id="subject"
                 type="text"
                 value={subject}
                  name="subject"
                  placeholder="Enter your email"
                className={styles.input}  />
              </div>
              <div  className={styles.item}>
                <label className={styles.label} htmfor="message">Message:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={message}
                  className={styles.input}
                  placeholder="Enter your message here!"
                 /> 
              </div>
              <div className={styles.btn}>
                <button type="submit" className={styles.button}>
                Send
                </button>
              </div>
              </form>
          </div>
         
          </div> 
    </div>
  )
}

export default ContactForm;