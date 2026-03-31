import { IoCartOutline } from 'react-icons/io5';
import logoImg from '../../assets/logo.png'
import { Menu } from 'lucide-react';

const NavBar = ({ cartCount = 0, onCartClick }) => {  // Add props
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle sm:hidden">
            <Menu />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-1 font-bold text-xl">
          <img className="w-10" src={logoImg} /> Ai Hub
        </div>
      </div>
      
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Services</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-5">
        {/* Cart Button with Badge */}
        <div className="relative">
          <button 
            onClick={onCartClick}  // Add click handler
            className='btn btn-circle text-2xl text-red-500'
          >
            <IoCartOutline />
          </button>
          {/* Notification Badge - shows only when cart has items */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </div>
        <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;