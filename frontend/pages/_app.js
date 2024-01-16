import '../styles/globals.css'
import {NavBar} from '../components/componentIndex';


const MyApp = ({ Component, pageProps }) => (
   <div>
      <NavBar />
      <Component {...pageProps} />
   </div> 
  );
  


export default MyApp;
