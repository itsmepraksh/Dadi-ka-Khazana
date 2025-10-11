import { faBowlRice, faDove, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"


const About = () => {

  const navigate = useNavigate()
  return (
    <div className="py-20 px-5 md:px-[7%]">

      <h1 className=" text-center text-xl md:text-2xl font-['GilroyRegular'] ">About Us</h1>
      <div id="about-part" className="flex flex-col items-center justify-center pb-10">
        <FontAwesomeIcon className="bg-red-400 p-2 py-3 text-4xl rounded-full my-4" icon={faBowlRice} />
        <h2 className="text-xl font-[GilroyMedium] text-red-400 ">Our Story</h2>
        <p className="text-center py-2 text-zinc-400">At Dadi ka Kazana, we believe that cooking should be an adventure, a journey of flavors and creativity. Our app was born from a shared passion for food and a desire to make cooking accessible and enjoyable for everyone, regardless of their skill level.</p>
      </div>

      <div id="about-desc" className="bg-zinc-700 rounded-xl px-6 md:px-10 py-10 md:py-12  flex flex-col gap-6">
        <div id="mission" className="flex gap-4 md:gap-8 items-start">
          <FontAwesomeIcon className="bg-red-900/70 text-red-200 p-2 text-2xl md:text-3xl rounded-full" icon={faDove} />
          <div id="mission-desc">
            <h1 className="text-2xl  font-['GilroyBold']">Our Mission</h1>
            <p className="text-zinc-400 font-['GilroyRegular'] py-2">Our mission is to inspire and empower home cooks to explore new recipes, techniques, and ingredients.
              We strive to provide a platform that not only offers a vast library of recipes but also fosters a community where users can share their culinary creations, tips, and experiences.</p>
          </div>
        </div>
        <div id="team" className="flex gap-4 md:gap-8 items-start">
          <FontAwesomeIcon className="bg-red-900/70 text-red-200 p-2 text-2xl md:text-3xl rounded-full" icon={faUserGroup} />
          <div id="team-desc" className="">
            <h1 className="text-2xl  font-['GilroyBold']">Our Team</h1>
            <p className="text-zinc-400 font-['GilroyRegular'] py-2 ">We're a team of food enthusiasts, chefs, and tech experts dedicated to bringing the joy of cooking from our kitchen to yours.</p>
          </div>
        </div>
      </div>

      <div id="about-contact" className="py-10 flex flex-col items-center md:place-self-center text-center md:w-1/2">
        <h2 className="text-2xl font-[GilroyMedium] text-red-400 font-bold ">Contact Us</h2>
        <p className="text-zinc-400 p-6">We'd love to hear from you! Whether you have feedback, suggestions, or just want to share your cooking journey, feel free to reach out.</p>
        <button onClick={()=>navigate('/contact')} className="bg-red-400 font-['GilroyMedium'] font-bold px-6 py-2 rounded-4xl ">Get in Touch</button>
      </div>
    </div>
  )
}

export default About