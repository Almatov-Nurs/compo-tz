// Styles
import { useRef } from 'react';
import classes from './Checkbox.module.scss';


const Checkbox = (props) => {
  const checkbox = useRef(null);
  const { size = 'small', label } = props;

  const handleTab = (e) => {
    if (e.key === 'Enter') {
      checkbox.current.click();
    }
  };

  return (
    <label className={classes.label}>
      <input className={classes.input} type="checkbox" { ...props } hidden ref={checkbox} />
      <span className={`${classes.checkbox} ${classes?.[size] || ''}`} onKeyDown={handleTab} tabIndex='0'></span>
      {label || null}
    </label>
  );
};

export default Checkbox;
