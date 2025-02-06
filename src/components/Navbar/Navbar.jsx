// import PropTypes from 'prop-types'
import { ButtonToggle } from "../ButtonToggle/ButtonToggle";
import { NavItems } from "../NavItems/NavItems";
import { useState } from "react";

import "./Navbar.css";
import { Link } from "react-router";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <div className="ern">ERN</div>
        <div className="dev">/DEV</div>
      </Link>
      <ButtonToggle isOpen={ isOpen } onToggleMenu={ onToggleMenu }/>
      <NavItems isOpen={ isOpen }/>
    </nav>
  )
}

Navbar.propTypes = {

}


