import React, { useState, useEffect } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { SiBuymeacoffee, SiPatreon, SiKofi } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { DEF_SUPPORT } from "@/constants/defaults";
import NextButton from "../UI/NextButton";
import Markdown from "../Markdown";

function Support({ back }) {
  const [isShown, setIsShown] = useState(false);
  const [support, setSupport] = useState(DEF_SUPPORT);
  const handleSupportChange = (field, e) => {
    const change = { ...support };
    change[field] = e.target.value;
    setSupport(change);
  };
  function onNext() {
    setIsShown(true);
  }

  useEffect(() => {
    DEF_SUPPORT.buyMeACoffee = support.buyMeACoffee;
    DEF_SUPPORT.kofi = support.kofi;
    DEF_SUPPORT.paypal = support.paypal;
    DEF_SUPPORT.patreon = support.patreon;
  });
  return (
    <>
      {isShown ? (
        <Markdown back={() => setIsVisible(false)} />
      ) : (
        <div className="fade-on-appear">
          <button
            className="left-0  m-8 font-bold hover:text-pink-300 transition-all duration-300 ease-in-out outline-none"
            onClick={back}
          >
            {"<"} Back {"/>"}
          </button>
          <div className="flex flex-col items-center ">
            <p className="w-full text-center text-2xl select-none my-10 mt-18">
              Let People Support You on your Journey{" "}
              <BiDonateHeart className="inline " />
            </p>
            <div className="flex flex-col w-full md:w-1/2 mt-10">
              <div className="flex ">
                <input
                  className="outline-none placeholder-gray-700 bg-transparent border-b w-full  p-2 focus:border-pink-300"
                  placeholder="Buy Me a Coffee username"
                  value={support.buyMeACoffee || ""}
                  onChange={(event) =>
                    handleSupportChange("buyMeACoffee", event)
                  }
                />
                <SiBuymeacoffee className="w-8 ml-2 h-12 hover:text-pink-300 transition-all duration-500 ease-in-out" />
              </div>
              <div className="flex mt-10">
                <input
                  className="outline-none placeholder-gray-700 bg-transparent border-b w-full  p-2 focus:border-pink-300"
                  placeholder="Ko-Fi username"
                  value={support.kofi || ""}
                  onChange={(event) => handleSupportChange("kofi", event)}
                />
                <SiKofi className="w-8 h-12 ml-2 hover:text-pink-300 transition-all duration-500 ease-in-out" />
              </div>
              <div className="flex mt-10 ">
                <input
                  className="outline-none placeholder-gray-700 bg-transparent border-b w-full  p-2 focus:border-pink-300"
                  placeholder="Patreon username"
                  value={support.patreon || ""}
                  onChange={(event) => handleSupportChange("patreon", event)}
                />
                <SiPatreon className="w-8 h-12 ml-2 hover:text-pink-300 transition-all duration-500 ease-in-out" />
              </div>
              <div className="flex mt-10 mb-32">
                <input
                  className="outline-none placeholder-gray-700 bg-transparent border-b w-full  p-2 focus:border-pink-300"
                  placeholder="PayPal username"
                  value={support.paypal || ""}
                  onChange={(event) => handleSupportChange("paypal", event)}
                />
                <BsPaypal className="w-8 h-12 ml-2 hover:text-pink-300 transition-all duration-500 ease-in-out" />
              </div>
            </div>
            <NextButton onNext={onNext}></NextButton>
          </div>
        </div>
      )}
    </>
  );
}

export default Support;
