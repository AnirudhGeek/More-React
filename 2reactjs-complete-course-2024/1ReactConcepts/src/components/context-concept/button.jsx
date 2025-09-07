import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButtonComponent() {
  const { setTheme, theme } = useContext(GlobalContext);

  return (
    <button className="border px-2 py-1 mx-2 my-3" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Change Theme
    </button>
  );
}

export default ContextButtonComponent;
