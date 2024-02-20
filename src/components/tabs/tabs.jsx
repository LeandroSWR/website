import React, { useState } from 'react';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Experience from '../experience/Experience';
import './tabs.css';

const TabContent = ({ children }) => {
    return <div className="tab-content">{children}</div>;
  };

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    // This function is called when a tab is clicked
    const onSelectTab = (tabId) => {
      setActiveTab(tabId);
    };

  return (
    <div className="tabs-container">
      <ul className="tab-list">
        <li className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => onSelectTab('tab1')}>About Me</li>
        <li className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => onSelectTab('tab2')}>Portfolio</li>
        <li className={`tab ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => onSelectTab('tab3')}>Education</li>
        <li className={`tab ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => onSelectTab('tab4')}>Random</li>
      </ul>
      <div className="tab-content">
        {activeTab === 'tab1' && <TabContent><About /></TabContent>}
        {activeTab === 'tab2' && <TabContent><Portfolio /></TabContent>}
        {activeTab === 'tab3' && <TabContent><Experience /></TabContent>}
        {activeTab === 'tab4' && <TabContent>Content for Tab 4</TabContent>}
      </div>
    </div>
  );
};

export default Tabs;
