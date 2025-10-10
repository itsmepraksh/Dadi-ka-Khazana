import { Link } from "react-router-dom"

 

const Footer = () => {
  return (
    <div className='font-[GilroyRegular] mt-auto  py-10 md:px-[7%] rounded-lg bg-zinc-600/70 text-zinc-300 text-center'>
        <div id="foot-link" className=' flex justify-around md:justify-evenly  '>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/privacy"}>Privacy Policy</Link>
        </div>
        <div id="icon-link" className="py-4"></div>
        <p>&copy; 2025 Dadi Ka Khazana</p>
        
    </div>
  )
}

export default Footer