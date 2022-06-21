import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button'
import { TaskContext } from './taskContext';

function AddList() {
  const [task, setTask] = useContext(TaskContext);

  const initList = { id: null, task_name: '', status: 'Pending' };

  const [list, setList] = useState(initList);

  const handleChange = e => {
    const { name, value } = e.target;
    setList({ ...list, id: new Date().getTime() + 1, [name]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...task, list]
    setTask(newTodos);
    setList(initList);
  };

  return (
    <form>
      <label>Task :</label>
      &nbsp;
      <input type="text" name="task_name" value={list.task_name} onChange={handleChange} />
      &nbsp;
      <label>Status :</label>
      &nbsp;
      <select name="status" value={list.status} onChange={handleChange}>
        <option value="Pending"> Pending </option>
        <option value="InProgress"> InProgress </option>
        <option value="Complete"> Complete </option>
      </select>
      &nbsp;
      <Button variant="outline-success" className="button-primary" type="submit" onClick={submitHandler}>Add list</Button>
    </form>
  )
}

export default AddList;