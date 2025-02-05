import PropTypes from 'prop-types';

import { FiMenu, FiX } from 'react-icons/fi';

import "./ButtonToggle.css";

export const ButtonToggle = ({onToggleMenu, isOpen}) => {

  return (
    <button onClick={ onToggleMenu } className="menu-icon" >
      {isOpen ? <FiX /> : <FiMenu />}
    </button>
  )
}

ButtonToggle.propTypes = {
    onToggleMenu: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

