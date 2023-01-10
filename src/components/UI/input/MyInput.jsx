import React from 'react';
import './MyInput.css'

const MyInput = ({type,placeholder, ...props}) => {
    return (
        <input {...props} type={type} placeholder={placeholder} className="myInput"  />
    );
};

export default MyInput;