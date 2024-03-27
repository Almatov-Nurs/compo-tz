// Assets
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Burger } from '../../assets/icons/burger.svg';
import { ReactComponent as Notifications } from '../../assets/icons/notifications.svg';
import { ReactComponent as Like } from '../../assets/icons/like.svg';
import { ReactComponent as Basket } from '../../assets/icons/basket.svg';
// Components
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import UserDropDown from '../UserDropDown/UserDropDown';
// Styles
import classes from './Header.module.scss';


const Header = () => {
  return (
    <header>
      <nav className={`${classes.nav} container-lg`}>
        <a href="/"><Logo/></a>
        <Button icon={Burger}>Меню</Button>
        <TextField
          height={48}
          placeholder='Поиск'
          type='search'
        />
        <a href="#"><Notifications/></a>
        <hr className={classes.divider} />
        <a href="#"><Like/></a>
        <Button icon={Basket} variant='text'>144 235₽</Button>
        <UserDropDown/>
      </nav>

      <nav className={`${classes.links} container-lg`}>
        links
      </nav>
    </header>
  );
};

export default Header;
