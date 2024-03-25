import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div className="container mx-auto px-6 lg:px-24">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;