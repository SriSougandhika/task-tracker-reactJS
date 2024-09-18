import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './App.css'; // Import the CSS file
import DisplayIcon from './icons_FEtask/Display.svg';
import DownIcon from './icons_FEtask/down.svg';
import UrgentIcon from './icons_FEtask/SVG - Urgent Priority colour.svg';
import AddIcon from './icons_FEtask/add.svg';
import DotsIcon from './icons_FEtask/3 dot menu.svg';
import NoPriorityIcon from './icons_FEtask/No-priority.svg';
import HighIcon from './icons_FEtask/Img - High Priority.svg';
import MediumIcon from './icons_FEtask/Img - Medium Priority.svg';
import LowIcon from './icons_FEtask/Img - Low Priority.svg';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check if the data is as expected
        setTasks(data.tasks || []);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const handleGroupByChange = (event) => {
    setGroupBy(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="container">

      <div className={`dropdown ${dropdownVisible ? 'show' : ''}`}>
      <div className="panel">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img className="icon-left" src={DisplayIcon} alt="Display Icon" width="16" height="16" />
        Display
        <img className="icon-right" src={DownIcon} alt="Down Arrow" width="16" height="16" />
      </button>
      </div>
        <div className="dropdown-content">
          <div className="option-container">
            <label htmlFor="groupBy">Group by:</label>
            <select id="groupBy" onChange={handleGroupByChange} value={groupBy}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="option-container">
            <label htmlFor="sortBy">Sort by:</label>
            <select id="sortBy" onChange={handleSortByChange} value={sortBy}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      <div className="board-container">
  <div className="column">
  <div className="heading">
  <div className="heading-content">
    <img src={NoPriorityIcon} alt="no priority Icon" className="heading-icon" />
    <h2>No priority</h2>
    </div>
    <div className="right-icons">
        <img src={AddIcon} alt="Add Icon" className="heading-icon" />
        <img src={DotsIcon} alt="Menu Icon" className="heading-icon" />
    </div>
    </div>
    <div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-2</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Implement Email Notification System</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>
    <div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-3</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Optimize Database Queries for performance</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>

  </div>
  <div className="column">
  <div className="heading">
  <div className="heading-content">
    <img src={UrgentIcon} alt="Urgent Icon" className="heading-icon" />
    <h2>Urgent</h2>
    </div>
    <div className="right-icons">
        <img src={AddIcon} alt="Add Icon" className="heading-icon" />
        <img src={DotsIcon} alt="Menu Icon" className="heading-icon" />
    </div>
    </div>
    <div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-4</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Add Multi-Language Support</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>
<div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-11</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Conduct Security Vulnerability Assessment</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>

  </div>
  <div className="column">
  <div className="heading">
  <div className="heading-content">
    <img src={HighIcon} alt="High Icon" className="heading-icon" />
    <h2>High</h2>
    </div>
    <div className="right-icons">
        <img src={AddIcon} alt="Add Icon" className="heading-icon" />
        <img src={DotsIcon} alt="Menu Icon" className="heading-icon" />
    </div>
    </div>
    <div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-6</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Enhance Search Functionality</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>
<div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-8</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Create onboarding Tutorial for New Users</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>
<div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Update User Profile Page UI</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>

  </div>
  <div className="column">
  <div className="heading">
  <div className="heading-content">
    <img src={MediumIcon} alt="Medium Icon" className="heading-icon" />
    <h2>Medium</h2>
    </div>
    <div className="right-icons">
        <img src={AddIcon} alt="Add Icon" className="heading-icon" />
        <img src={DotsIcon} alt="Menu Icon" className="heading-icon" />
    </div>
    </div>
    <div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-7</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Integrate Third-Party Payment Gateway</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>
<div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-9</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Implement Role-Based Access Control (RBAC)</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>

  </div>
  <div className="column">
  <div className="heading">
  <div className="heading-content">
    <img src={LowIcon} alt="Low Icon" className="heading-icon" />
    <h2>Low</h2>
    </div>
    <div className="right-icons">
        <img src={AddIcon} alt="Add Icon" className="heading-icon" />
        <img src={DotsIcon} alt="Menu Icon" className="heading-icon" />
    </div>
    </div>
    <div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-10</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Upgrade Server Infrastructure</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>
<div className="task-box">
  <div className="task-header">
    <span className="task-label">CAM-5</span>
  </div>
  <div className="task-content">
    <label>
      <input type="checkbox" name="task-topic" />
      <span>Add Multi-Language Support - Enable Multi-Language Support</span>
    </label>
    <div className="task-request">
      <img src={DotsIcon} alt="Request Icon" className="request-icon" />
      <span>Feature Request</span>
    </div>
  </div>
</div>

  </div>
</div>
      </div>
      <Board tasks={tasks} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
