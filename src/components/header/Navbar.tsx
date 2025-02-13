import { useScrolling } from "../../hooks/useScrolling";
import Download from "../form/Download";

import { DropdownMenu } from "../form/DropdownMenu";
import styles from "../../style/Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import blackLogo from "../../assets/images/black-logo.png";
import afsuLogo from "../../assets/images/afsu-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isScrolled } = useScrolling();
  const location = useLocation(); // ✅ Օգտագործում ենք useLocation

  useEffect(() => {
    setOpen(false); // Փակել dropdown-ը էջի փոփոխությունից հետո
  }, [location.pathname]);

  return (
    <div
      style={{
        backgroundColor: isScrolled ? "white" : "transparent",
      }}
      className={`flex justify-center w-full fixed pt-10 pb-10 top-0 transition-all duration-300 ${styles.container}`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl px-10 py-2">
        {/* Logo Section */}
        <div>
          <Link to="/">
            <img
              src={
                location.pathname === "/index-2" ||
                location.pathname === "/index-3" ||
                isScrolled
                  ? blackLogo
                  : afsuLogo
              }
              alt="logo not found!"
              className="h-12"
            />
          </Link>
        </div>

        {/* Dropdown Menu Section */}
        <div
          style={{
            visibility: location.pathname === "/index-2" ? "hidden" : "visible",
          }}
          className="hidden lg:block"
        >
          <DropdownMenu />
        </div>

        <div className="flex items-center space-x-4">
          {/* Download Button */}
          <Download
            text="Download CV"
            href="./assets/files/Armenuhi Toroyan CV.pdf"
            download="Armenuhi Toroyan CV.pdf"
            color={
              location.pathname === "/index-3" || isScrolled ? "black" : "white"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
