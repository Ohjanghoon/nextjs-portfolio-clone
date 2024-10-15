"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface StyleProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

export default function WorkSliderBtns({
  containerStyles,
  btnStyles,
  iconStyles,
}: StyleProps) {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
}
