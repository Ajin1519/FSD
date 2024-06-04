import React, { useEffect, useState } from 'react';
import Header from './Header';
import Params from './Params';
import RequestService from '../services/requestService';
import Body from './Body';

const Tab = ({ tabIndex, tabData, updateTabData }) => {
  const [activeTab, setActiveTab] = useState(0);
  //const [selectedOption, setSelectedOption] = useState('GET');
  const [inputValue, setInputValue] = useState(tabData);
  console.log(`active tab ${tabIndex} is attached`);

  useEffect(()=>{
    setInputValue(tabData);
  },[tabData])

  // const handleSelect = (option) => {
  //   setSelectedOption(option);
  // };

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try {
      const  requestService =   RequestService();
      const response = await requestService.sendRequest(inputValue);
      console.log("Request successful:", response);
      const newData = {...tabData,response:response}
      setInputValue(newData);
      updateTabData(tabIndex, newData);
      
    } catch (error) {
      console.error("Request Failed:", error);
      const newData = {...tabData,response:error.message}
      setInputValue(newData);
      updateTabData(tabIndex, newData);
    }

  }

  const handleSelect = (option) => {
    const newData = {...tabData,httpmethod:option}
    setInputValue(newData);
    updateTabData(tabIndex, newData);
  };


  const handleInputChange = (e) => {
    const newData = {...tabData,url:e.target.value}
    setInputValue(newData);
    updateTabData(tabIndex, { ...inputValue,...newData});
  };
  const handleHeaderChange = (newHeader) => {
    const newData = {...tabData,header:newHeader}
    setInputValue(newData);
    updateTabData(tabIndex, { ...inputValue,...newData});
  };

  const handleParamsChange = (newParams) => {
    const baseUrl = inputValue.url.split('?')[0];
    const queryString = newParams.map(row => `${row.key}=${row.value}`).join('&');
    const newUrl = `${baseUrl}?${queryString}`;
    const newData = { ...tabData, params: newParams, url: newUrl };
    setInputValue(newData);
    updateTabData(tabIndex, newData);
  };

  const handleBodyChange = (newBody) => {
    setInputValue(prevState => ({ ...prevState, body: newBody }));
    updateTabData(tabIndex, { ...inputValue, body: newBody });
  };

  const tabs = [
    { title: 'Params', content: <Params params={inputValue} updateParams={handleParamsChange}/> },
    { title: 'Header', content: <Header headers={inputValue} updateHeaders={handleHeaderChange}/> },
    { title: 'Body',content:<Body data={inputValue} updateBody={handleBodyChange}/>}
  ];

  return (
    <div>
      <div className="input-group mb-3">
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {inputValue.httpmethod}
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => handleSelect('GET')}>GET</button>
            <button className="dropdown-item" onClick={() => handleSelect('POST')}>POST</button>
            <button className="dropdown-item" onClick={() => handleSelect('PUT')}>PUT</button>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          value={inputValue.url}
          onChange={handleInputChange}
          aria-label="Text input with dropdown button"
        />
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Send
        </button>
      </div>
      <div>
        <ul className="nav nav-tabs">
          {tabs.map((tab, index) => (
            <li className="nav-item" key={index}>
              <a
                className={`nav-link ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                href="#!"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content mt-3">
          <div className="tab-pane fade show active">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
      <h3 className="font-weight-light">Response</h3>
      <div className='border border-muted p-4'>
        <p>{inputValue.response}</p>
      </div>
    </div>
  );
};

export default Tab;
