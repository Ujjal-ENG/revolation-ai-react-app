import React from 'react';

const Button = (props) => {
    return (
        <div className=" flex justify-center ">
            <button className={`btn btn-${props.color} flex justify-center font-bold`}>{props.children}</button>
        </div>
    );
};

export default Button;
