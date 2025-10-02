import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

 

const Faq = ( {faqQuest}) => {
    const [faqStatus, setFaqStatus] = useState(false)
  return (
    <div id="faq">
            <div
              onClick={() => setFaqStatus(!faqStatus)}
              className="bg-zinc-700 px-4 py-3 rounded text-sm"
            >
              <h1 className="flex justify-between items-center py-1 ">
                <span>{faqQuest}</span>
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
          </div>
  )
}

export default Faq