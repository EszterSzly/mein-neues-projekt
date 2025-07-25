
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import TextandTitle from "../components/TextandTitle";
import Footer from "../components/Footer";



export default function Home() {
  
  return (
    <div>
      <Header />
      <Highlights />
     <TextandTitle title= "Our Promise" text= {`Everything here is 100% organic — from our beans to our baked goodies. We believe in keeping it real and natural, so you get the purest flavors without any nasties.
Good for you,good for the planet, and always made with love. That’s our vibe.`}/>
<Footer/>
    </div>
  );
}
