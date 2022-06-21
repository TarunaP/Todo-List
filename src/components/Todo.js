import React, { useContext } from 'react'
import AddList from './AddList';
import EditList from './EditList';
import List from './List';
import { EditContext } from './editContext';

function Todo() {
    const [editing] = useContext(EditContext);
    return (
        <>
            <div>
                <div>
                    {(editing) ? (
                        <div>
                            <p>Edit Todo</p>
                            <EditList />
                        </div>
                    ) : (
                        <div>
                            <p>Add Todo</p>
                            <AddList />
                        </div>
                    )}
                </div>
                <div>
                    <br />
                    <p>View Todo List </p>
                    <List />
                </div>
            </div>
        </>
    )
}

export default Todo
