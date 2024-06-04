import React, { useEffect, useState } from 'react';

const Body = ({ data, updateBody }) => {
  const [textAreaValue, setTextAreaValue] = useState(JSON.stringify(data.body, null, 2));
  useEffect(()=>{
    try{
      setTextAreaValue(JSON.stringify(data.body, null, 2));
    }
    catch{
      setTextAreaValue();
    }
  },[data.body])
  const handleChange = (e) => {
    setTextAreaValue(e.target.value);

    try {
      const parsedData = JSON.parse(e.target.value);
      updateBody(parsedData);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  return (
    <textarea
      className="form-control"
      id="bodytextarea"
      rows="3"
      value={textAreaValue}
      onChange={handleChange}
    ></textarea>
  );
};

export default Body;
