// Hooks
import { useRef } from 'react';
// Assets
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
// Types
import PropTypes from 'prop-types';
// Styles
import classes from './TextField.module.scss';


const TextField = ({ type = 'text', placeholder = '', height = '100%' }) => {
  if (type === 'search') {
    const searchRef = useRef(null);

    const handleClear = () => {
      searchRef.current.value = '';
      searchRef.current.focus();
    };

    return (
      <form
        action=''
        className={classes[ 'search-form' ]}
        id='search'
        method='GET'
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        <input
          className={`${classes.textfield} ${classes.searchfield}`}
          name='search'
          placeholder={placeholder}
          ref={searchRef}
          type={type}
        />
        <button className={`${classes.btn} ${classes.close}`} onClick={handleClear} type='button'><Close/></button>
        <button className={`${classes.btn} ${classes.search}`} type='submit'><Search/></button>
      </form>
    );
  }

  return (
    <input
      className={classes.textfield}
      placeholder={placeholder}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
      type={type} />
  );
};

TextField.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'search']),
};

export default TextField;
