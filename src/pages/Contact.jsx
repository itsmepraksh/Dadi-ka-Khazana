import {
  faChevronUp,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Faq from "../components/Faq";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const contactHandler = (data) => {};

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
        <h1 className=" text-xl font-['GilroyRegular']">
          Frequently Asked Questions
        </h1>
        <div id="faq-box" className="flex flex-col py-4 gap-y-3">
          {/* <div id="faq">
            <div
              onClick={() => setFaqStatus(!faqStatus)}
              className="bg-zinc-700 px-4 py-3 rounded text-sm"
            >
              <h1 className="flex justify-between items-center py-1 ">
                <span>How do I search for recipes ? </span>
                <FontAwesomeIcon
                  className={faqStatus ? "" : "rotate-[180deg]"}
                  icon={faChevronUp}
                />
              </h1>

              {faqStatus && (
                <p className="text-zinc-400">
                  You can search for recipes using keywords, ingredients, or
                  dietary preferences in the search bar at the top of the app.
                </p>
              )}
            </div>
            <p></p>
          </div> */}
          <Faq faqQuest={"How do I search for recipes ? "} />
          <Faq faqQuest={"Can I save my favorite recipes?"} />
          <Faq faqQuest={"Is there a way to share recipes with friends?"} />
        </div>
      </div>
      <div id="contact-part">
        <h1 className=" text-xl font-['GilroyRegular'] pb-2">
          Contact Information
        </h1>
        <div id="contact-dta" className="">
          <div className="flex items-center gap-3 text-zinc-300 py-2">
            <FontAwesomeIcon
              className="bg-zinc-700 p-2 rounded"
              icon={faEnvelope}
            />
            <span>Email: support@dadikakhazana.com</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-300 py-2">
            <FontAwesomeIcon
              className="bg-zinc-700 p-2 rounded"
              icon={faPhone}
            />
            <span>Phone: (+91) 123456789</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-300 py-2">
            <FontAwesomeIcon
              className="bg-zinc-700 p-2 rounded" icon={faInstagram} />
            <span>Follow us on Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
