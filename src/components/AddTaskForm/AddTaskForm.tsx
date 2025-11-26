import "./AddTaskForm.css"
import * as React from "react";

interface AddTaskProps {
    onChangeValue: React.ChangeEventHandler<HTMLInputElement>;
    onSubmitAdd: React.FormEventHandler<HTMLFormElement>;
    formValue: string;
}

const AddTaskForm: React.FC<AddTaskProps> = ({onChangeValue, onSubmitAdd, formValue}) => {
    return (
        <form onSubmit={onSubmitAdd}>
            <input type="text" placeholder="Add new task" className="addForm" onChange={onChangeValue} value={formValue}></input>
            <button type="submit" className="addButton">Add</button>
        </form>
    );
};

export default AddTaskForm;