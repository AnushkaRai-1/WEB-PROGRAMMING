import React, { useRef, useState } from 'react';

const FormUseRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submitted, setSubmitted] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ name: nameRef.current.value, email: emailRef.current.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" ref={nameRef} />
      <input type="email" placeholder="Email" ref={emailRef} />
      <button type="submit">Submit</button>
      <p>Name: {submitted.name}</p>
      <p>Email: {submitted.email}</p>
    </form>
  );
};

export default FormUseRef;
