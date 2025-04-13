import React, { useRef } from 'react';

const FocusForm = () => {
  const inputRef = useRef();

  const focusInput = () => inputRef.current.focus();

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusForm;

