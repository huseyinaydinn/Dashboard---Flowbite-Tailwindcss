import Logo from "../assets/images/Logo.svg";
import { FaBell } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import { Context } from "../context/MenuContext";
import { useContext } from "react";

const Navbar = () => {
  const { menuOpen, setMenuOpen } = useContext(Context);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-10">
      <header className="h-[80px] max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-200 px-5">
        <button
          className=" sm:hidden flex items-start"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdOutlineClose size={32} /> : <HiMenuAlt1 size={32} />}
        </button>

        <div className="sm:flex hidden items-center gap-8">
          <a className=" items-center space-x-3 rtl:space-x-reverse">
            <img
              src={Logo}
              className="h-8 w-8 sm:block hidden"
              alt="Flowbite Logo"
            />
          </a>
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-[402px] py-3 px-4 ps-10 text-base border-none outline-gray-500 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search..."
                required
              />
            </div>
          </form>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <FaBell size={32} />
          <img
            className="w-8 h-8 rounded-full"
            src="https://i.pravatar.cc/300"
            alt="Rounded avatar"
          />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
