// Modules
import React from 'react';
// Types
import PropTypes from 'prop-types';
// Styles
import classes from './BreadCrumbs.module.scss';


const BreadCrumbs = ({ links = [] }) => {
  return (
    <nav className={classes.breadcrumbs}>
      {
        links.map((link, index) => (
          <React.Fragment key={index}>
            <a className={classes.link} href={link.url}>{link.title}</a>
            {index < links.length - 1 ? <span className={classes.link}>/</span> : null}
          </React.Fragment>
        ))
      }
    </nav>
  );
};

BreadCrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default BreadCrumbs;
