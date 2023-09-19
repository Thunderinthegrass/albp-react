import classes from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = (props) => {
  return (
    <div className={classes.navBar}>
      <ul className={classes.navList}>
        <NavbarItem link="orange" content="Orange"/>
        <NavbarItem link="/Lesson2" content="Gold"/>
      </ul>
    </div>
  );
};

export default Navbar;
