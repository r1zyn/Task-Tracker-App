import React from "react";
import PropTypes from "prop-types";

/**
 * The button component to create new buttons.
 * @param {{ color: PropTypes.string, text: PropTypes.string, onClick }} props
 * @returns 
 */
const Button = ({ color, text, onClick }) => {
    return (
        <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
    );
};

Button.defaultProps = {
    color: "#000000"
};

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;