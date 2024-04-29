import React, { useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
type Props = {};

function BackToTop({}: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <>
      <div
        className={`fixed animate__animated ${
          visible ? "animate__fadeInUp" : "animate__fadeOutDown"
        }  bottom-3 right-3 p-2 cursor-pointer fill-white`}
        onClick={scrollToTop}
      >
        <BsFillArrowUpSquareFill className="fill-white" size="20" />
      </div>
    </>
  );
}

export default BackToTop;
