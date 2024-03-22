// Styles
import classes from './Header.module.scss';


const Header = () => {
  return (
    <header>
      <nav className={classes.nav}></nav>
      <nav className={classes.links}></nav>
    </header>
  );
};

export default Header;
