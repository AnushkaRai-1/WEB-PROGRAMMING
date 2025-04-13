import React from 'react';

const StyledButtonInternal = () => (
  <>
    <style>
      {`
        .internal-btn {
          background-color: green;
          padding: 10px;
          font-size: 16px;
          color: white;
        }
      `}
    </style>
    <button className="internal-btn">Internal Styled Button</button>
  </>
);

export default StyledButtonInternal;
