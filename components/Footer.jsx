import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import css from '../styles/Footer.module.css'
import Image from "next/image";
import Logo from "../assets/Logo.png"
export default function Footer() {
    return(
        <div className={css.container} >
        <span>All RIGHT RESERVED</span>
           <div className={css.social}>
           <FaFacebook  size={45}/>
           <FaGithub size={45}/>
           <FaInstagram size={45}/>

        </div>
        <div className={css.logo}>
       <Image src={Logo} alt='' width={50} height={50} />
       <span>Fudo</span>
        </div>


</div>

     
    )
};
