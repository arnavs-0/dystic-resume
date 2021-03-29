import React from 'react';

const ProgressBar = (props) => {
  return (
    <>
      <div className="bg-gray-200 h-5 w-100">
        <div
          className="bg-gray-600 h-5"
          style={{ width: `${props.percent}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
