import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
export const BtnNav = ({ content = "Nav", link }) => {
  return (
    <NavLink className={({ isActive }) => (isActive ? "btn btn--nav btn--nav--active" : "btn btn--nav")} to={link}>{content}</NavLink>
  );
};
BtnNav.protoTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};