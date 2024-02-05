import React, { useState } from "react";
import img1 from "../src/assets/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";
import img2 from "../src/assets/bear-kiss-bear-kisses.gif";

const App = () => {
  const [WordIndex, setWordIndex] = useState(0);
  const [ButtonPadding, setButtonPadding] = useState({ x: 16, y: 8 }); 
  const [ButtonTextSize, setButtonTextSize] = useState(18); 
  const [isVisible, setIsVisible] = useState(true); 

  const handleClick = () => {
    setWordIndex((prevIndex) => (prevIndex + 1) % Words.length);

    setButtonPadding((prevPadding) => ({
      x: prevPadding.x * 1.5,
      y: prevPadding.y * 1.5,
    }));

    setButtonTextSize((prevSize) => prevSize * 1.5);

    setIsVisible(!isVisible)
  };

  const Words = ["Nie", "Jesteś pewna?", "Na pewno?", "Proszę", "Pomyśl o tym"];

  const buttonStyle = {
    padding: `${ButtonPadding.y}px ${ButtonPadding.x}px`, // Ustawienie dynamicznego paddingu przycisku dla osi X i Y
    fontSize: `${ButtonTextSize}px`, // Ustawienie dynamicznego rozmiaru tekstu
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className={isVisible ? "block" : "hidden"}>
        <img className="h-[200px]" src={img1} alt="" />
        <h1 className="text-2xl mb-4">Zostaniesz moją walentynką</h1>
      </div>
      <div  className={isVisible ? "hidden" : "block"}>
        <img className="h-[200px]" src={img2} alt="" />
        <h1 className="text-2xl mb-4 text-center mt-4">JEJ</h1>
      </div>
      <div  className={isVisible ? "block" : "hidden"}>
        <button
          className="bg-green-500 px-4 py-2 text-white rounded-md mr-1"
          style={buttonStyle}
        >
          Tak
        </button>

        <button
          onClick={handleClick}
          className="bg-red-500 px-4 py-2 rounded-md text-white text-[18px] mt-2 md:mt-0 ml-1" // Dodano margines górny dla telefonów
        >
          {Words[WordIndex]}
        </button>
      </div>
    </div>
  );
};

export default App;
