// import PropTypes from 'prop-types'
import { useState } from "react";

import { ButtonToggle } from "../ButtonToggle/ButtonToggle";
import "./Navbar.css";
import { NavItems } from "../NavItems/NavItems";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <h1 className="logo">
        <div className="ern">ERN</div>
        <div className="dev">/DEV</div>
      </h1>
      <ButtonToggle isOpen={ isOpen } onToggleMenu={ onToggleMenu }/>

      <NavItems isOpen={ isOpen }/>
    </nav>
  )
}

Navbar.propTypes = {

}


