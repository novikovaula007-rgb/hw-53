import "./Task.css"
import * as React from "react";

interface TaskProps extends React.PropsWithChildren {
    text: string;
    key: number;
    remove: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = ({text, remove}) => {
    return (
        <div className="taskWrapper">
            <p>{text}</p>
            <button className="deleteButton" type="button" onClick={remove}></button>
        </div>
    );
};

export default Task;