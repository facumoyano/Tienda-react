import { Input } from '@mui/material';
import React from 'react';

const Form = ({ setBuyer, buyer, name }) => {
    const handleSubmitChange = (e) => {
        setBuyer({...buyer, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <Input type='text' name={name} onChange={handleSubmitChange} />

    </div>);
};

export default Form;
