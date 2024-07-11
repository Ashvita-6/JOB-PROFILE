import React,{useState} from 'react'
import MySvgComponent from './logosvg';
import { Link, NavLink } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2"; 
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        {path:'/',title:'Search for a job'},
        {path:'/my-job',title:'My Jobs'},
        {path:'/salary',title:'Salary Estimate'},
        {path:'/post-job',title:'Post a job'},
    ]
  return (
    <div>
      <header className="max-w-screen-2xl mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
          <a href="/" className="flex items-center gap-2 text-2xl text-black">
            <MySvgComponent></MySvgComponent>
            <span>Job Portal</span>
          </a>

          {/* nav items for lg devices */}
          <ul className="hidden md:flex gap-12">
            {navItems.map(({ path, title }) => (
              <li className="text-base text-black" key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/*sign up and login btn*/}
          <div className="text-black font-medium space-x-5 hidden lg:block">
            <Link className="py-2 px-5 border rounded" to="/login">
              Login
            </Link>
            <Link
              className="py-2 px-5 border rounded bg-blue-700 text-white"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
          {/*for smaller screens*/}
          <div className="md:hidden block">
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? (
                <RxCross1 className="w-5 h-5 text-black" />
              ) : (
                <HiMiniBars3CenterLeft className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </nav>

        {/*nav items for smaller screens */}
        <div
          className={`px-4 py-6 bg-black rounded-sm ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul>
            {navItems.map(({ path, title }) => (
              <li className="text-base text-white py-2" key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <hr />
          <ul className=''>
            <li className="py-2 flex justify-center">
              <Link className="text-white" to="/login">
                Login
              </Link>
            </li>
            <hr />
            <li className="py-2 flex justify-center">
              <Link className="text-white" to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
