import React from "react";
import { useState } from "react";

const Test = () => {
  const [showtext, setShowText] = useState(false);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("erich");

  const handleCount = () => {
    setCount(1);
  };
  console.log(showtext);
  return (
    <div>
      <p>Hello World</p>
      {showtext ? <p>TextShowed</p> : <p>Hide</p>}
      {/* by default sudah di set false , */}
      {name ? <p>nama: {name}</p> : "kosong"}

      {count ? (
        <p>benar {count}</p>
      ) : (
        <button onClick={handleCount}>Count</button>
      )}
    </div>
  );
};

export default Test;
