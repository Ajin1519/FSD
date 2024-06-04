import React, { useEffect, useState } from 'react';

const Params = ({params,updateParams}) => {
  const [data, setData] = useState(params.params);
  useEffect(()=>{
    setData(params.params);
  },[params.params])
  const handleInputChange = (id, field, value) => {
    const newData = data.map(row => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setData(newData);
    updateParams(newData);
  };

  const handleAddRow = () => {
    const newId = data.length + 1;
    setData([...data, { id: newId, key: '', value: '' }]);
  };

  return (
    <div className="container mt-5">
      <h3 className='font-weight-light'>Quick Param</h3>
      <button className="btn btn-primary mb-3" onClick={handleAddRow}>Add Row</button>
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Key</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.key}
                  onChange={(e) => handleInputChange(row.id, 'key', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.value}
                  onChange={(e) => handleInputChange(row.id, 'value', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Params;
