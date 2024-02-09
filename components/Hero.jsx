import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import { FaPhone } from 'react-icons/fa';
import Pizaa1 from '../assets/p1.jpg'
export default function Hero(params) {
    return(
    <div className={css.container}>
      {/* left right */}
      <div className={css.left}>
      <div className={css.cherryDiv}>
       <span>More than Faster</span>
       <Image src={Cherry} alt=""   width={40} height={25}/>
      </div>


  <div className={css.heroText}>
      <span>Be The Fastest</span>
      <span>In Delivery</span>

      <span>
        Your <span style={{color: "var(--themeRed"}}>Pizza</span>
      </span>
  </div>


   <span className='css.miniText'>
      Our Mission is to  filling your tummy with delicious food  and
      <br></br>
      with fast  and free Delivery
   </span>


  <button className={`btn ${css.btn}`}>
      Get Started

  </button>

</div>

      {/* Right side */}
      <div className={css.right}>

        <div className={css.imageContainer}>
        <Image src={HeroImage} alt=''  layout='intrinsic'/>

        </div>

        <div className={css.ContactUs}>
        <span>Contact us</span>
        <div>
          <FaPhone color='white'/>
        </div>

        </div>
      </div>
    </div>
    )
};

