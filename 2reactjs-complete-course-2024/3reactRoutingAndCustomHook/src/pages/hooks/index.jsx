import { useEffect, useRef, useState } from "react";

function Hooks() {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRefElement = useRef()

  function handleClick() {
    countValue.current++;
    console.log(countValue.current);
  }

  useEffect(() => {
    const getDivReference = divElementRef.current;
    inputRefElement.current.focus()

    getDivReference.style.color = "red"
    setTimeout(() => {
      getDivReference.style.color = "green";
    }, 2000);

    console.log(getDivReference);
  }, []);

  return (
    <div>
      <h1>Use ref, use Callback and use memo hook </h1>
      <button className="border px-2 py-1" onClick={handleClick}>
        Click me{" "}
      </button>
      <div ref={divElementRef}>Some Random text</div>
      <input type="text" name="name" placeholder="Enter your name" ref={inputRefElement} />
    </div>
  );
}

export default Hooks;
