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

const Projects = () => {
  const [ dataState, setDataState ] = useState([
    { id: 1, name: 'Admin', company: 'Jaxi Tank', tech: 'JavaScript' }
  ]);
  const [ countState, setCountState ] = useState(dataState.length ? dataState.length + 1 : 1);
  const [ newProject, setNewProject ] = useState({
    id: countState,
    name: '',
    project: '',
    dev: ''
  });
  const [ showNewState, setShowNewState ] = useState(false);

  const handleChange = (e) => {
    HandleChangeHelper(e, newProject, setNewProject);
  };

  const handleSubmit = () => {
    HandleSubmitHelper(countState, dataState, newProject, setCountState, setDataState, setNewProject);
  };

  const handleDelete = (id) => {
    HandleDeleteHelper(countState, dataState, id, setCountState, setDataState);
  };

  const handleEdit = (project) => {
    setNewProject(project);
    setShowNewState(true);
  };

  const toggleShow = () => {
    ToggleShowHelper(countState, newProject, setShowNewState, setNewProject, showNewState);
  };

  return (
    <EntityContainer>
      <article>
        <h1>PROJECTS</h1>
        <button onClick={() => toggleShow()}>New</button>
        <NewRow
          change={(e) => handleChange(e)}
          fields={{ name: 'Name', company: 'Company', tech: 'Technology' }}
          item={newProject}
          submit={() => handleSubmit()}
          show={showNewState}
        />
        <Table
          columns={['Name', 'Company', 'Technology']}
          data={
            dataState.map(project => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.company}</td>
                <td>{project.tech}</td>
                <td>
                  <button onClick={() => handleEdit(project)}>Edit</button>
                  <button onClick={() => handleDelete(project.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        />
      </article>
    </EntityContainer>
  );
};

export default Projects;