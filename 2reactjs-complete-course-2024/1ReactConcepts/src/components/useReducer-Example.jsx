import { useReducer } from "react";

const initialState = {
  showTextFlag: false,
  changeTextStylesFlag: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

function reducer(state, action) {
  switch (action.type) {
    case HIDE_TEXT:
      //   console.log(state, action);
      return {
        ...state,
        showTextFlag: false,
      };

    case SHOW_TEXT:
      return {
        ...state,
        showTextFlag: true,
      };

    case CHANGE_TEXT_STYLE:
      return {
        ...state,
        changeTextStylesFlag: !state.changeTextStylesFlag,
      };

    default:
      return state;
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      {state?.showTextFlag ? <h3 className={state.changeTextStylesFlag?"bg-black text-white" : "bg-red-400 text-white"}>Use Reducer Example</h3> : null}

      <button
        onClick={() => dispatch({ type: HIDE_TEXT })}
        className="border px-2 py-1 mx-2 my-1"
      >
        Hide Text
      </button>
      <button
        onClick={() => dispatch({ type: SHOW_TEXT })}
        className="border px-2 py-1 mx-2 my-1"
      >
        Show Text
      </button>
      <button
        onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}
        className="border px-2 py-1 mx-2 my-1"
      >
        Toggle Text Styles
      </button>
    </div>
  );
}

//prac

export default UseReducerExample;
