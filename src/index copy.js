import React, { useState } from 'react';

const Button = () => {
    const [name, setName] = useState('Hola');
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

export default Button;

