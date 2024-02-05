import React, { useState } from "react";

const Btns = () => {
  const [btnWidth, setBtnWidth] = useState(100);
  const [btnHeight, setBtnHeight] = useState(60);
  const [btnFont, setBtnFont] = useState(1.2);
  const [WordIndex, setWordIndex] = useState(0); // Initial index

  const handleClick = () => {
    setBtnWidth((prevWidth) => prevWidth * 1.5);
    setBtnHeight((prevHeight) => prevHeight * 1.5);
    setBtnFont((prevFont) => prevFont * 1.5);

    setWordIndex((prevIndex) => (prevIndex + 1) % Words.length);
  };

  const Words = ["Nie","Jesteś pewna?", 'Na pewno?', 'Proszę', 'Pomyśl o tym'];

  return (
    <div>
      <button
        className={`bg-green-500 px-4 py-4`}
        style={{ width: `${btnWidth}px`, height: `${btnHeight}px`, fontSize: `${btnFont}rem` }}
      >
        Tak
      </button>

      <button
        onClick={handleClick}
        className={`bg-red-500 px-4 py-4 text-xl w-auto h-[60px] `}
      >
        {Words[WordIndex]}
      </button>
    </div>
  );
};

export default Btns;
