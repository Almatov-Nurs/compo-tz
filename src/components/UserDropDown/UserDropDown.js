// Hooks
import { useState } from 'react';
// Assets
import avatar from '../../assets/images/avatar.png';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
// Styles
import classes from './UserDropDown.module.scss';


const UserDropDown = () => {
  const [ open , setOpen ] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <div className={classes.user} onClick={handleClick}>
      <img alt="Avatar" className={classes.avatar} src={avatar} />
      <span className={classes.username}>Ермаков Е.</span>
      <button className={classes.btn} type='button'>
        <Arrow style={{ rotate: `${open ? 180 : 0}deg` }}/>
      </button>
    </div>
  );
};

export default UserDropDown;
