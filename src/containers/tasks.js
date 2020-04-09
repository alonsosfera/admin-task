import React, { useState } from 'react';
import { EntityContainer } from 'styles/containers';
import Table from 'components/table';
import NewRow from "components/newRow";
import {
  HandleChangeHelper,
  HandleDeleteHelper,
  HandleSubmitHelper,
  ToggleShowHelper
} from './helpers';

const Tasks = () => {
  const [ dataState, setDataState ] = useState([
    { id: 1, name: 'First', project: 'Admin', dev: 'Alonso Gutierrez' }
  ]);
  const [ countState, setCountState ] = useState(dataState.length ? dataState.length + 1 : 1);
  const [ newTask, setNewTask ] = useState({
    id: countState,
    name: '',
    project: '',
    dev: ''
  });
  const [ showNewState, setShowNewState ] = useState(false);

  const handleChange = (e) => {
    HandleChangeHelper(e, newTask, setNewTask);
  };

  const handleSubmit = () => {
    HandleSubmitHelper(countState, dataState, newTask, setCountState, setDataState, setNewTask);
  };

  const handleDelete = (id) => {
    HandleDeleteHelper(countState, dataState, id, setCountState, setDataState);
  };

  const handleEdit = (task) => {
    setNewTask(task);
    setShowNewState(true);
  };

  const toggleShow = () => {
    ToggleShowHelper(countState, newTask, setShowNewState, setNewTask, showNewState);
  };

  return (
    <EntityContainer>
      <article>
        <h1>TASKS</h1>
        <button onClick={() => toggleShow()}>New</button>
        <NewRow
          change={(e) => handleChange(e)}
          fields={{ name: 'Name', project: 'Project', dev: 'Developer' }}
          item={newTask}
          submit={() => handleSubmit()}
          show={showNewState}
        />
        <Table
          columns={['Name', 'Project', 'Developer']}
          data={
            dataState.map(task => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.project}</td>
                <td>{task.dev}</td>
                <td>
                  <button onClick={() => handleEdit(task)}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        />
      </article>
    </EntityContainer>
  );
};

export default Tasks;