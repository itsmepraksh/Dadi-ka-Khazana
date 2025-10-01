import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";



const Contact = () => {

  const {register,handleSubmit, reset , formState:{errors}} =  useForm();

  const [faqStatus, setFaqStatus] = useState(false)

  const contactHandler = (data)=>{

  }
  return (
    <div className="py-20 px-5">
      <h1 className="text-center text-xl font-['GilroyRegular']">Contact Us</h1>
      <form className="flex flex-col  py-4 gap-y-3">
        <input
          type="text"
          placeholder="enter your name"
          className="bg-zinc-700 px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="enter your email"
          className="bg-zinc-700 px-4 py-2 rounded"
        />
        <textarea
          rows={4}
          type="text"
          placeholder="enter your message"
          className="bg-zinc-700 px-4 py-2 rounded resize-none"
        ></textarea>

        <button className="bg-red-400 rounded py-2 font-['GilroyMedium'] text-xs active:scale-[0.95] transition">
          Send Message
        </button>
      </form>
      <div id="contact-faqs" className="py-5">
        <h1 className="text-center text-xl font-['GilroyRegular']">Frequently Asked Questions</h1>
        <div id="faq-box" className="flex flex-col py-4">

          <div id="faq">
            <div 
            onClick={()=>setFaqStatus(!faqStatus)}
            className="flex justify-between items-center bg-zinc-700 px-4 py-2 rounded">
              <h1 className="text-sm">How do I search for recipes ?</h1>
              
              <FontAwesomeIcon className={ faqStatus ? "rotate-[180deg]" : ""} icon={faChevronUp} />
              
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
