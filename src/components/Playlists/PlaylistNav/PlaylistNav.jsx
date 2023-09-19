import classes from "./PlaylistNav.module.scss";
import PlayListNavItem from "./PlayListNavItem/PlayListNavItem";

const PlaylistNav = () => {
  return (
    <div className={classes.navWrapper}>
      <nav className={classes.nav}>
        <PlayListNavItem id="1" />
        <PlayListNavItem id="2" />
        <PlayListNavItem id="3" />
        <PlayListNavItem id="4" />
        <PlayListNavItem id="5" />
      </nav>
    </div>
  );
};

export default PlaylistNav;
