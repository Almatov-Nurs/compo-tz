// Types
import PropTypes from 'prop-types';
// Styles
import classes from './Button.module.scss';


const Button = ({
  w = 'initial',
  h = 'initial',
  link = '#',
  disabled = false,
  variant = 'contained',
  icon: Icon = null,
  children,
}) => {
  const button = (
    <button
      className={classes[ variant ]}
      disabled={disabled}
      style={{ width: w, height: h }}
      type='button'
    >
      {Icon ? <Icon className={classes.icon}/> : null}
      {children}
    </button>
  );

  if (variant === 'text') {
    return button;
  }

  return (
    <a
      className={classes[ variant ]}
      disabled={disabled}
      href={link}
      style={{ width: w, height: h }}
      type='button'
    >
      {Icon ? <Icon className={classes.icon}/> : null}
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.node
  ]),
  variant: PropTypes.oneOf([ 'contained', 'text' ]),
  disabled: PropTypes.bool,
  h: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  link: PropTypes.string,
  w: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default Button;
