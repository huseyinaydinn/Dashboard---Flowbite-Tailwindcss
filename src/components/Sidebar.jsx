import { RiPieChartFill } from "react-icons/ri";
import { FaShoppingBag, FaLock } from "react-icons/fa";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { HiCollection, HiSupport, HiDocumentReport, HiOutlineGlobe } from "react-icons/hi";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";


import { useContext, useEffect } from "react";
import { Context } from "../context/MenuContext";
import { useMediaQuery } from "react-responsive";
import SubMenu from "./SubMenu";

const Menus = [
  { title: "Overview", src: "overview", icon: <RiPieChartFill size={24} /> },
  {
    title: "Pages",
    src: "pages",
    icon: <HiDocumentReport size={24} />,
    subMenus: [
      {
        title: "Dashboard",
        src: "pages/dashboard1",
        cName: "sub-nav",
      },
      {
        title: "Top Products",
        src: "pages/dashboard1",
        cName: "sub-nav",
      },
      {
        title: "Latest Customers",
        src: "pages/dashboard1",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Sales",
    src: "sales",
    icon: <FaShoppingBag size={24} />,
    subMenus: [
      {
        title: "Product List",
        src: "sales/product-list",
        cName: "sub-nav",
      },
      {
        title: "Billing",
        src: "sales/billing",
        cName: "sub-nav",
      },
      {
        title: "Invoice",
        src: "sales/invoice",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Messages",
    src: "messages",
    icon: <HiMiniInboxArrowDown size={24} />,
  },
  {
    title: "Authentication",
    src: "messages",
    icon: <FaLock size={24} />,
    subMenus: [
      {
        title: "Account",
        src: "pages/account",
        cName: "sub-nav",
      },
      {
        title: "Security",
        src: "pages/security",
        cName: "sub-nav",
      },
      {
        title: "Password",
        src: "pages/password",
        cName: "sub-nav",
      },
    ],
  }
];

const Menu2 = [
  {
    icon: <FaClipboardList size={24} />,
    title: "Docs",
    src: "docs"
  },
  {
    icon: <HiCollection size={24} />,
    title: "Components",
    src: "components"
  },
  {
    icon: <HiSupport size={24} />,
    title: "Help",
    src: "help"
  }
]

const Sidebar = () => {
  const { menuOpen, setMenuOpen } = useContext(Context);

  const DesktopMode = useMediaQuery({
    query: "(min-width: 640px)",
  });

  useEffect(() => {
    {
      DesktopMode && setMenuOpen(true);
    }
  }, []);

  return (
    <aside
      className={`fixed top-0 border-r border-gray-200 h-screen bg-white pt-[80px] z-[1] transition-all duration-200 ease-linear overflow-x-hidden whitespace-pre overflow-y-auto
        ${DesktopMode
          ? menuOpen
            ? "w-[250px]"
            : "w-[80px]"
          : menuOpen
            ? "w-[250px]"
            : "hidden"
        }
      `}
    >
      <div className="flex flex-col justify-between items-start px-3 ml-4 h-full">
        <div className="flex flex-col relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${DesktopMode ? '' : 'hidden'} flex justify-end items-center px-2 py-2 gap-1 mt-1 absolute ${menuOpen ? 'top-0 -right-10' : 'top-0 right-2'} bg-blue-100 rounded-lg`}
          >
            <span className="text-xs font-medium">{menuOpen ? 'Minimize' : ''}</span>
            {menuOpen ? (
              <LuArrowLeftToLine size={24} />
            ) : (
              <LuArrowRightToLine size={24} />
            )}
          </button>
          <div
            className={`${menuOpen ? "items-start" : "items-center"
              } flex flex-col gap-1 mt-12`}
          >
            {Menus.map((menu, index) => (
              <SubMenu key={index} data={menu} />
            ))}
          </div>
          <hr />
          <div className={`${menuOpen ? "items-start" : "items-center"
            } flex flex-col gap-1 mt-4`}>
            {Menu2.map((menu, index) => (
              <SubMenu key={index} data={menu} />
            ))}
          </div>


        </div>
        {/* Sidebar bottom logos */}
        <div className={`flex ${menuOpen ? 'flex-row' : 'flex-col'} items-center justify-center gap-5 mb-4 w-full`}>
          <a href="#" className="hover:text-blue-600 text-gray-900 transition-colors duration-300"><GiSettingsKnobs size={24} /></a>
          <a href="#" className="hover:text-blue-600 text-gray-900 transition-colors duration-300"><HiOutlineGlobe size={24} /></a>
          <a href="#" className="hover:text-blue-600 text-gray-900 transition-colors duration-300"><IoSettingsOutline size={24} /></a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
