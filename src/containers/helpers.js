export const HandleChangeHelper = (e, row, setRow) => {
  setRow({
    ...row, [e.target.name]: e.target.value
  });
};

export const HandleSubmitHelper = (count, data, newRow, setCount, setData, setNewRow) => {
  const row = data.findIndex((i) => {
    return i.id === newRow.id;
  });
  if (row === -1){
    setData([...data, newRow]);
    setNewRow({...newRow, id: parseInt(newRow.id) + 1});
    setCount(count + 1);
  } else {
    const newData = [...data];
    newData[row] = newRow;
    setData(newData);
  }
};

export const HandleDeleteHelper = (count, data, id, setCount, setData) => {
  const newData = [...data];
  newData.splice(newData.findIndex((i) => {
    return i.id === id;
  }), 1);
  setCount(count - 1);
  setData(newData);
};

export const ToggleShowHelper = (count, newRow, setShow, setNewRow, show, ) => {
  if (show === false){
    setNewRow({...newRow, id: count});
    setShow(true);
  } else {
    setShow(false);
  }
};