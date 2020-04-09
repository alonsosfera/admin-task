import React from 'react';
import { TableContainer } from "styles/components";

const Table = ({ columns, data }) => (
  <TableContainer>
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column}>{column}</th>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map(row => row)}
    </tbody>
  </TableContainer>
);

export default Table;