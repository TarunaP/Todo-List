import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button'
import { TaskContext } from './taskContext';
import { EditContext } from './editContext';
import { CurrentContext } from './currentContext'

function EditList() {

    const [task, setTask] = useContext(TaskContext);
    const [editing, setEditing] = useContext(EditContext);
    const [currentTask] = useContext(CurrentContext);
    const [new_task, setNewTask] = useState(currentTask);


    useEffect(() => {
    }, [task])

    const handleChange = e => {
        const { name, value } = e.target;
        setNewTask({ ...new_task, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newTask = task.map(obj => {

            if (obj.id == e.target.id) {
                obj['status'] = new_task.status
                obj['task_name'] = new_task.task_name
                return { ...obj };
            }

            return obj;
        });
        setTask(newTask);
        setEditing(false);
    }

    return (
        <form>
            <label>Task :</label>
            &nbsp;
            <input type="text" value={new_task.task_name} name="task_name" onChange={handleChange} />
            &nbsp;
            <label>Status :</label>
            &nbsp;
            <select name="status" value={new_task.status} onChange={handleChange}>
                <option value="Pending"> Pending </option>
                <option value="InProgress"> InProgress </option>
                <option value="Complete"> Complete </option>
            </select>
            &nbsp;
            <Button variant="secondary" type="submit" id={new_task.id} onClick={handleSubmit} >Edit task</Button>
            &nbsp;
            <Button variant="dark" type="submit" onClick={() => setEditing(false)}>Cancel</Button>
        </form>
    )
}

export default EditList;