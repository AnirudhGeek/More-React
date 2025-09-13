import { Outlet } from "react-router-dom";
import Header from "../header";


function Layout() {
    return ( 
        <div>
            <Header/>
            <Outlet/>   
            {/* this outlet will render all the child elements below the header component */}
        </div>
     );
}

export default Layout;