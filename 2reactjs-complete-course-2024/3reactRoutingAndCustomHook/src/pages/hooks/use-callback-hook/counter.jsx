import { memo } from "react";

function Counter({ countValue, onClick }) {
    console.log("this is getting rendered ",countValue)
  return (
    <div>
      <p>{countValue}</p>
      <button className="border px-2 py-1" onClick={onClick}>
        Click
      </button>
    </div>
  );
}

// we also have to wrap the whole component which we are rendering inside "memo" like below
export default memo(Counter)
