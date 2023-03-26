import React from 'react';

const Ccard = (props) => {
    const { name, description, image, features } = props.data;
    const date = props.data.published_in;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                {features.map((el, i) => (
                    <li key={i}>{el}</li>
                ))}
                <div className="card-actions flex justify-between items-center">
                    <h2 className="card-title">{date}</h2>
                    <button className="btn btn-error font-bold">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Ccard;
