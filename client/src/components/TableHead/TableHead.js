import React from "react";
// import './TableHead.css';

// Function that displays table header column
function TableHead(props) {
    return (
      <div className="container card">
        <div className="row">
          <div className="col-sm">
          <h3 onClick={()=>props.sortName('name')}>Name</h3>
          </div>
          <div className="col-sm">
          <h3 onClick={()=>props.sortName('email')}>Email</h3>
          </div>
          <div className="col-sm">
          <h3>Cell</h3>
          </div>
        </div>
    </div>
    );
  }
  
  export default TableHead;