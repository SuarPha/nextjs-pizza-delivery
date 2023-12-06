import '../styles/globals.scss'
import { Montserrat } from '@next/font/google'
import Layout from '../components/Layout'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'




const montserrat = Montserrat({
  weight: ['200', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

 function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout>
      <main className={montserrat.className}>
      <Component {...pageProps} />  
      </main>
      <PayPalScriptProvider options={{ "client-id": "AXGe9RDjH9pepc0KLT2sXuuHMEYAr4dcA_2muENav9SjLe-MSmt3UzYG3l6xvCCtLIs_t-lg74TF96e4"}}/> 
    </Layout>
    </Provider>
  
  ) 
}
export default App