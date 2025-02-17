import { Link } from "react-router-dom";
import styles from "../../style/Navbar.module.css";
import SingleDropdown from "./SingleDropdown";
import { useScrolling } from "../../hooks/useScrolling";

export const DropdownMenu = () => {
  const { isScrolled } = useScrolling();
  const homePages = [
    { title: "Home 1", url: "/" },
    { title: "Home 2", url: "/index-2" },
    { title: "Home 3", url: "/index-3" },
    { title: "Home 4 (Light)", url: "/index-4" },
    { title: "Home 4 (Dark)", url: "/index-4-dark" },
  ];

  const services = [
    { title: "Services", url: "/service" },
    { title: "Services Details 1", url: "/service-details" },
  ];

  const portfolios = [
    {
      title: "Portfolio 1",
      url: "/portfolio",
    },
    { title: "Portfolio 2", url: "/portfolio-details" },
    { title: "Portfolio 3", url: "/portfolio-details-2" },
  ];

  const blogPages = [
    { title: "Our Blogs", url: "/our-blog" },
    { title: "Blog Details 1", url: "/blog-details-1" },
    { title: "Blog Details 2", url: "/blog-details-2" },
  ];

  const pages = [
    { title: "About", url: "/about" },
    { title: "Pricing Plans", url: "/pricing-plans" },
    { title: "404", url: "/404" },
  ];

  return (
    <div
      style={{
        background: "transparent",
        height: "100%",
      }}
      className="flex "
    >
      <SingleDropdown buttonLabel="Home" pages={homePages} />
      <SingleDropdown buttonLabel="Services" pages={services} />
      <SingleDropdown buttonLabel="Portfolio" pages={portfolios} />
      <SingleDropdown buttonLabel="Blog" pages={blogPages} />
      <SingleDropdown buttonLabel="Pages" pages={pages} />
      <Link
        to={`/contact`}
        className={` block pt-4 text-xl ${styles.contact}`}
        style={{
          color:
            location.pathname === "/index-3" || isScrolled ? "black" : "white",  // Եթե սքրոլ է արված կամ Home3 էջում է՝ գույնը  սև լինի․․․
        }}
      >
        Contact
      </Link>
    </div>
  );
};
