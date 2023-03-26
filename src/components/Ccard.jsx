import React from 'react';

const Ccard = (props) => {
    const {
        name,
        description,
        image,
        published_in: { publishedIn },
        features
    } = props.data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                {features.map((el) => (
                    <li>{el}</li>
                ))}
                <div className="card-actions flex justify-between items-center">
                    <h2 className="card-title">{publishedIn}</h2>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Ccard;
