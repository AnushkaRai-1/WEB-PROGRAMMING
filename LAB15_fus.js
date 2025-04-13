import React, { useState } from 'react';

const FormUseState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </form>
  );
};

export default FormUseState;
