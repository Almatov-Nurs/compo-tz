// Assets
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Burger } from '../../assets/icons/burger.svg';
import { ReactComponent as Notifications } from '../../assets/icons/notifications.svg';
import { ReactComponent as Like } from '../../assets/icons/like.svg';
import { ReactComponent as Basket } from '../../assets/icons/basket.svg';
import { ReactComponent as Messenger } from '../../assets/icons/messenger.svg';
import { ReactComponent as Percent } from '../../assets/icons/percent.svg';
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

      <nav className={`${classes.second_nav} container-lg`}>
        <ul className={classes.links}>
          {
            [ 'Мои заказы', 'Сотрудники', 'Шаблоны заказов', 'Обращения' ].map((text, index) => (
              <li key={index}><a className={classes.link} href="#">{text}</a></li>
            ))
          }
        </ul>
        <ul className={classes.links}>
          <Button icon={Messenger} iconGap={8} variant='text'>Ваш менеджер</Button>
          <a className={classes.blueLink} href='#'><Percent className={classes.blueLink_icon} />Акции</a>
          <a className={classes.blueLink} href='#'>Блог</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
