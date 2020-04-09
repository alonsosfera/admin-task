import React from 'react';
import { NewRowContainer } from 'styles/components';

const NewRow = ({ change, fields, item, show, submit }) => (
  <NewRowContainer show={show}>
    {Object.keys(fields).map(key => (
      <div key={key}>
        <label htmlFor={key}>{fields[key]}: </label>
        <input
          type="text"
          name={key}
          value={item[key]}
          onChange={(e) => change(e)}
        />
      </div>
    ))}
    <button onClick={() => submit()}>Guardar</button>
  </NewRowContainer>
);

export default  NewRow;