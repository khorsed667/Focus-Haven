import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Pages/Shared/Nav/Nav";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {

    const location = useLocation();
    const removeSection = location.pathname.includes('signIn') || location.pathname.includes('signUp');

    return (
        <div>
            {removeSection || <Nav></Nav>}
                    <Outlet></Outlet>
            {removeSection || <Footer></Footer>}
        </div>
    );
};

export default Main;