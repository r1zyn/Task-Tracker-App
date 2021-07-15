import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa"; 

/**
 * The task component.
 * @param {{ task: { id: PropTypes.number, text: PropTypes.string, day: PropTypes.string, reminder: PropTypes.bool }, onDelete: PropTypes.func, onToggle: PropTypes.func }} props
 * @returns 
 */
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}{" "} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)}/></h3>  
            <p>{task.day}</p>          
        </div>
    );
};

Task.propTypes = {
    task: { id: PropTypes.number, text: PropTypes.string, day: PropTypes.string, reminder: PropTypes.bool },
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default Task;