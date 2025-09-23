import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return <header>
    <div className="bg-gray-800 text-white">
        <NavLink  to={'/'}>ReactQuery</NavLink>
        <ul className="flex items-center justify-center gap-10">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/trad'>FetchOld</NavLink>
            </li>
            <li>
                <NavLink to='/rq'>FetchRQ</NavLink>
            </li>
        </ul>
    </div>
  </header>;
};

export default Header;
