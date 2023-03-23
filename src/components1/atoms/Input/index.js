import React from "react";

const input = ({ label, ...rest }) => {
  return (
    <div>
      <div className="form-group">
        <div className="form-group">
          <label>{label}</label>
          <input {...rest} className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default input;
