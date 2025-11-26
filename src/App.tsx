import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import Task from "./components/Task/Task.tsx"
import {useState} from "react";

const App = () => {
    const [tasks, setTasks] = useState([
        {text: "Buy milk", id: "1"},
        {text: "Do homework", id: "2"},
        {text: "Walk with dog", id: "3"}
    ])

    const generateId = (index: number) => {
        const newId = Date.now()
        return newId + index
    }

    return (
        <>
            <AddTaskForm></AddTaskForm>
            <div>{tasks.map(task => (
                <Task text={task.text} id={task.id}/>
            ))}</div>
        </>
    );
};

export default App;