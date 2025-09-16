import { useLayoutEffect, useState } from "react";


function useWindowResize(){
    const [windowSize ,setWindowSize] = useState({
        width : 0,
        height : 0
    })

    //here we will be using useLayoutEffect effect 
    // it is similar to the useEffect but there is a slight differnce between them
    // useEffect will run once all th DOM elements will be rendered in the browser or after the paint process
    // but useLayoutEffect will be run before the DOM elements are being rendered on the browser 


    function handleResize(){
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }

     useLayoutEffect(()=>{

        handleResize()

        window.addEventListener('resize',handleResize)

        return()=>{
            window.removeEventListener('resize',handleResize)
        }
     },[])

     return {windowSize}
}


export default useWindowResize