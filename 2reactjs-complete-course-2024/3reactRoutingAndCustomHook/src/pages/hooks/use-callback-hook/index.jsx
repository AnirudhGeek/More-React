import { useCallback, useState } from "react";
import Counter from "./counter";

function UseCallbackExample() {

    const [ countOne,setCountOne] = useState(0)
    const [ countTwo,setCountTwo] = useState(0)

    const memoriseSetCountOneFunc = useCallback(()=>setCountOne(countOne+1),[countOne])
    const memoriseSetCountTwoFunc = useCallback(()=>setCountTwo(countTwo+1),[countTwo])

  return (
    <div>
      <h1>Use callback</h1>
      {/* unnecesarry render */}

      {/* <Counter countValue={countOne} onClick={()=>setCountOne(countOne+1)}/>
      <Counter countValue={countTwo} onClick={()=>setCountTwo(countTwo+1)}/> */}


    {/* using useCallback */}
      <Counter countValue={countOne} onClick={memoriseSetCountOneFunc}/>
      <Counter countValue={countTwo} onClick={memoriseSetCountTwoFunc}/>
    </div>
  );
}

export default UseCallbackExample;
