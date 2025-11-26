import "./AddTaskForm.css"

const AddTaskForm = () => {
    return (
        <form>
            <input type="text" placeholder="Add new task" className="addForm"></input>
            <button type="button" className="addButton">Add</button>
        </form>
    );
};

export default AddTaskForm;