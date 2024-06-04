import React, { useEffect, useState } from "react";
import Tab from "./Tab";

const MainContent = () => {
  const [tabs, setTabs] = useState([
    {
      title: "Tab 1",
      content: {
        url: "",
        httpMethod: "GET",
        response: "",
        body: {},
        params: [{ id: 1, key: "", value: "" }],
        headers: [{ id: 1, key: "", value: "" }],
      },
    },
    {
      title: "Tab 2",
      content: {
        url: "",
        httpMethod: "GET",
        response: "",
        body: {},
        params: [{ id: 1, key: "", value: "" }],
        headers: [{ id: 1, key: "", value: "" }],
      },
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    setTabs([
      ...tabs,
      {
        title: `Tab ${tabs.length + 1}`,
        content: {
          url: "",
          httpMethod: "GET",
          response: "",
          body: {},
          params: [{ id: 1, key: "", value: "" }],
          headers: [{ id: 1, key: "", value: "" }],
        },
      },
    ]);
  };
  const updateTabContent = (index, newContent) => {
    const newTabs = tabs.map((tab, tabIndex) =>
      tabIndex === index ? { ...tab, content: newContent } : tab
    );
    setTabs(newTabs);
  };

  return (
    <div className="p-3">
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
              href="#!"
            >
              {tab.title}
            </a>
          </li>
        ))}
        <li className="nav-item">
          <button className="btn btn-link" onClick={addTab}>
            +
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        <div className="tab-pane fade show active">
          <Tab
            tabIndex={activeTab}
            tabData={tabs[activeTab].content}
            updateTabData={updateTabContent}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
