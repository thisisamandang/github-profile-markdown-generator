import React, { useState } from "react";
import { DEF_SUPPORT, DEF_DATA, USER } from "@/constants/defaults";
function Markdown({ back }) {
  const [support, setSupport] = useState(DEF_SUPPORT);
  console.log(support.buyMeACoffee);
  return (
    <div className="fade-on-appear">
      <div>
        <button
          className="left-0  m-10 font-bold hover:text-pink-300 transition-all duration-300 ease-in-out outline-none"
          onClick={back}
        >
          {"<"} Back {"/>"}
        </button>
      </div>
    </div>
  );
}

export default Markdown;
