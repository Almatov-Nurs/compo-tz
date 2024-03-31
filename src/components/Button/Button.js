// Types
import PropTypes from 'prop-types';
// Styles
import classes from './Button.module.scss';


const Button = ({
  w = 'initial',
  h = 'initial',
  disabled = false,
  variant = 'contained',
  icon: Icon = null,
  iconGap = 12,
  children,
  style = {},
  onClick = () => { },
}) => {
  const button = (
    <button
      className={classes[ variant ]}
      disabled={disabled}
      onClick={onClick}
      style={{ width: w, height: h, ...style }}
    >
      {Icon ? <Icon className={classes.icon} style={{ marginRight: `${iconGap}px` }}/> : null}
      {children}
    </button>
  );

  if (variant === 'text') {
    return button;
  }

  return (
    <button
      className={classes[ variant ]}
      disabled={disabled}
      onClick={onClick}
      style={{ width: w, height: h, ...style }}
    >
      {Icon ? <Icon className={classes.icon} style={{ marginRight: `${iconGap}px` }}/> : null}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.node
  ]),
  iconGap: PropTypes.number,
  variant: PropTypes.oneOf([ 'contained', 'text' ]),
  disabled: PropTypes.bool,
  h: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  w: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default Button;
