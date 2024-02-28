import React from 'react';

const Button = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            Hi, {children}
        </div>
    );
};

export default Button;
