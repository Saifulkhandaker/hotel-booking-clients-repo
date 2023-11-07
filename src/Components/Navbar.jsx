import { NavLink } from "react-router-dom";
import logo from '../assets/icons/logo-v4-black.png'
import { Link } from "react-router-dom";

const Navbar = () => {





    const navlinks = <>
    <li className="text-lg font-medium"> <NavLink to="/">Home</NavLink></li>
    <li className="text-lg font-medium"> <NavLink to="/rooms">Rooms</NavLink></li>
    <li className="text-lg font-medium"> <NavLink to="/myBookings">My Bookings</NavLink></li>   
    </>

    return (
        <div>
            <div className="navbar bg-[#0B0604] text-white">
  <div className="navbar-start text-white">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0B0604] rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login">
    <button className="btn bg-[#C8B090] border-none rounded-sm text-white">Login</button>
    </Link>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;