import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <li><NavLink to='/'
         className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border text-[#23BE0A] font-semibold border-[#23BE0A] mr-3"
           : isPending
           ? "pending"
           : "mr-3"
       } 
        >Home</NavLink></li>
        <li><NavLink to='/listed'
         className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border text-[#23BE0A] font-semibold border-[#23BE0A] mr-3"
           : isPending
           ? "pending"
           : "mr-3"
       } 
        >Listed Books</NavLink></li>
        <li><NavLink to='/read'
         className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border text-[#23BE0A] font-semibold border-[#23BE0A] mr-3"
           : isPending
           ? "pending"
           : "mr-3"
       } 
        >Pages to Read</NavLink></li>

<li><NavLink to='/about'
         className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border text-[#23BE0A] font-semibold border-[#23BE0A] mr-3"
           : isPending
           ? "pending"
           : "mr-3"
       } 
        >About Us</NavLink></li>

<li><NavLink to='/contact'
         className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border text-[#23BE0A] font-semibold border-[#23BE0A] mr-3"
           : isPending
           ? "pending"
           : "mr-3"
       } 
        >Contact Us</NavLink></li>
        
        </>



    return (
        <div>
            <div className="navbar bg-base-100 mt-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <a className=" text-xl lg:text-3xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn text-white bg-[#23BE0A] mr-3">Sign In</a>
    <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
        
        </div>
    );
};

export default Navbar;