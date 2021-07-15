import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

/**
 * The component containing the list of tasks.
 * @param {{ tasks: { id: number; text: string; day: string; reminder: boolean; }[], onDelete: PropTypes.func, onToggle: PropTypes.func }} props
 * @returns 
 */
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </div>
    );
};

Tasks.propTypes = {
    tasks: new Array({ id: PropTypes.number, text: PropTypes.string, day: PropTypes.string, reminder: PropTypes.bool }),
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default Tasks;