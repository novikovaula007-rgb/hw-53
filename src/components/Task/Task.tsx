import "./Task.css"

interface TaskProps extends React.PropsWithChildren {
    text: string;
}

const Task: React.FC<TaskProps> = ({text}) => {
    return (
        <div className="taskWrapper">
            <span>{text}</span>
            <button className="deleteButton"></button>
        </div>
    );
};

export default Task;