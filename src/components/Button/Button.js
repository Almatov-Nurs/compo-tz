// Styles
import classes from './Button.module.scss';


const Button = ({ w = null, h = null, children }) => {
  return (
    <button
      className={classes.button}
      style={{ width: w, height: h }}
    >
      {children}
    </button>
  );
};

export default Button;
