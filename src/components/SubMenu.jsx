import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Context } from "../context/MenuContext";

const SubMenu = ({ data }) => {
  const { menuOpen, setMenuOpen } = useContext(Context);
  const [open, setOpen] = useState(false);
  return (
    <div className="cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex flex-row items-center gap-4 hover:text-blue-600 transition-all duration-300">
        <span
          className="flex flex-row gap-4 items-center"
          onClick={() => setMenuOpen(true)}
        >
          {data.icon}
          <span
            className={`${menuOpen ? "block" : "hidden"} `}

          >
            {data.title}
          </span>
        </span>{" "}
        <span>
          {data.subMenus ? (
            <FaChevronDown className={`${menuOpen ? "block" : "hidden"}`} />
          ) : (
            ""
          )}
        </span>
      </div>

      <div>
        <ul className="flex flex-col items-start gap-4 mt-4 ml-10 ">
          {data.subMenus?.map((item, idx) => (
            <li
              key={idx}
              className={`${open ? "block" : "hidden"} ${menuOpen ? "block" : "hidden"
                } hover:text-blue-600 transition-all duration-300`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;
