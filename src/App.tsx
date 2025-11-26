import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import Task from "./components/Task/Task.tsx"

const App = () => {
    return (
        <>
            <AddTaskForm></AddTaskForm>
            <Task text="fdf"/>
        </>
    );
};

export default App;