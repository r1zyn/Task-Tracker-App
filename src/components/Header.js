import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

/**
 * The header component for the task manager page.  
 * @param {{ title: PropTypes.string, onAdd: PropTypes.func, showAdd: PropTypes.bool }} props
 * @returns
 */
const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1> 
            {location.pathname === "/" && <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />}
        </header>
    );
};

/**
 * The default props for the header component if props (or attributes) are not assigned a value when a new instance of the header component is created.
 */
Header.defaultProps = {
    title: "Task Manager"
};

/**
 * Sets the type for the props.
 */
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
};

export default Header;