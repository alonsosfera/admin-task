import React, { useState } from 'react';
import { EntityContainer } from 'styles/containers';
import Table from 'components/table';
import NewRow from "components/newRow";
import { HandleChangeHelper, HandleDeleteHelper, HandleSubmitHelper, ToggleShowHelper } from './helpers';

const Tasks = () => {
  const [ dataState, setDataState ] = useState([
    { id: 1, name: 'Primero', project: 'Proyecto 1', dev: 'Alonso Gutierrez' }
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
        <h1>TAREAS</h1>
        <button onClick={() => toggleShow()}>Nuevo</button>
        <NewRow
          change={(e) => handleChange(e)}
          fields={{ name: 'Nombre', project: 'Proyecto', dev: 'Desarrollador' }}
          item={newTask}
          submit={() => handleSubmit()}
          show={showNewState}
        />
        <Table
          columns={['Nombre', 'Proyecto', 'Desarrollador']}
          data={
            dataState.map(task => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.project}</td>
                <td>{task.dev}</td>
                <td>
                  <button onClick={() => handleEdit(task)}>Editar</button>
                  <button onClick={() => handleDelete(task.id)}>Borrar</button>
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