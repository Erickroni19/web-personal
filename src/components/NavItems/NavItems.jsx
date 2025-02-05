import PropTypes from "prop-types";
import { NavLink } from "react-router";

import "./NavItems.css";

export const NavItems = ({isOpen}) => {
  return (
    <ul className={`items ${isOpen ? 'open' : ''}`}>
        <NavLink className="list-item" to="experience">
            Experiencia
        </NavLink>
        <NavLink className="list-item" to="projects">
            Proyectos
        </NavLink>
        <NavLink className="list-item" to="skills">
            Habilidades
        </NavLink>
        <NavLink className="list-item" to="about-me">
            Sobre mí
        </NavLink>
        <NavLink className="list-item" to="contact">
            Contacto
        </NavLink>
    </ul>
  )
}

NavItems.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

