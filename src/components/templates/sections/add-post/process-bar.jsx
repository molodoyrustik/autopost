import React from 'react';

const ProcessBar = (props) => {
  return (
    <div className="add-post__process-bar">
      <ul className="add-post__process-list">
        <li className="add-post__process-item">
          <i className={`add-post__process-circle ${props.count >= 1 ? 'add-post__process-circle--bg': ''}`}></i>
          <p className="add-post__process-text">Upload</p>
        </li>
        <li className="add-post__process-item">
          <i className={`add-post__process-circle ${props.count >= 2 ? 'add-post__process-circle--bg': ''}`}></i>
          <p className="add-post__process-text">Edit</p>
        </li>
        <li className="add-post__process-item">
          <i className={`add-post__process-circle ${props.count >= 3 ? 'add-post__process-circle--bg': ''}`}></i>
          <p className="add-post__process-text">Filter</p>
        </li>
        <li className="add-post__process-item">
          <i className={`add-post__process-circle ${props.count >= 3 ? 'add-post__process-circle--bg': ''}`}></i>
          <p className="add-post__process-text">Caption</p>
        </li>
      </ul>
    </div>
  );
}

export default ProcessBar;
