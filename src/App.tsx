import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import Task from "./components/Task/Task.tsx";
import {type ChangeEvent, type FormEvent, useState} from "react";

const App = () => {
    const [tasks, setTasks] = useState([
        {text: "Buy milk", id: 1},
        {text: "Do homework", id: 2},
        {text: "Walk with dog", id: 3}
    ])
    const [currentText, setCurrentText] = useState('');

    const generateId = () => {
        return Date.now();
    }

    const removeTask = (id: number) => {
        const index = tasks.findIndex(task => task.id === id);
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (currentText.length > 0) {
            const newId = generateId();
            const tasksCopy = [...tasks];
            tasksCopy.unshift({text: currentText, id: newId});
            setTasks(tasksCopy);
        } else {
            alert('You cannot submit an empty form!');
        }
        setCurrentText('');
    }

    return (
        <>
            <AddTaskForm
                onChangeValue={(e: ChangeEvent<HTMLInputElement>) => setCurrentText(e.target.value)}
                onSubmitAdd={onSubmit}
                formValue={currentText}>
            </AddTaskForm>
            <div>{tasks.map(task => (
                <Task
                    key={task.id}
                    text={task.text}
                    remove={() => removeTask(task.id)}
                />
            ))}</div>
        </>
    );
};

export default App;