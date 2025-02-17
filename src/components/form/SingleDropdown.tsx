import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styles from "../../style/Navbar.module.css";
import { useScrolling } from "../../hooks/useScrolling";
import { DropdownProps } from "../../interfaces/Types";

const SingleDropdown = ({ buttonLabel, pages, className }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const { isScrolled } = useScrolling();
  const location = useLocation();

  useEffect(() => {
    setOpen(false); // Փակել dropdown-ը էջի փոփոխությունից հետո
  }, [location.pathname]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      style={{ background: "transparent" }}
      className={`relative ${className}`}
    >
      <button
        type="button"
        className="inline-flex items-center justify-center text-sm h-10 px-4 py-2"
        onClick={handleToggle}
        style={{
          background: "transparent",
        }}
      >
        <span
          className="text-xl"
          style={{
            color:
              location.pathname === "/index-3" || isScrolled
                ? "black"
                : "white",
          }} // // Եթե սքրոլ է արված կամ Home3 էջում է՝ գույնը  սև լինի․․․
        >
          {buttonLabel}
        </span>
        <span
          className="ml-2 "
          style={{
            color:
              location.pathname === "/index-3" || isScrolled
                ? "black"
                : "white",
          }} // // Եթե սքրոլ է արված կամ Home3 էջում է՝ գույնը  սև լինի․․․
        >
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-12">
          <ul className="w-56 h-auto shadow-lg bg-white">
            {pages.map((item, index) => (
              <li
                key={index}
                className={`relative flex items-center px-4 py-2 text-sm cursor-pointer ${styles.link}`}
              >
                <Link to={item.url} className={` block ${styles.href}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleDropdown;
