import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Ccard = (props) => {
    const { name, description, image, features } = props.data;
    const date = props.data.published_in;

    const [modalID, setModalID] = useState('');

    const [modalData, setModalData] = useState('');

    const handleModalData = (id) => {
        setModalID(id);
    };

    useEffect((ids) => {
        fetChModalData(ids);
    }, []);

    const fetChModalData = async (ids) => {
        const fetchData = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${ids}`);
        const data = fetchData.json();
        setModalData(data.data);
    };
    console.log(modalData);

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h2 className="card-title">Features</h2>
                    {features.map((el, i) => (
                        <li key={i}>{el}</li>
                    ))}
                    <div className="card-actions flex justify-between items-center">
                        <h2 className="card-title">{date}</h2>

                        <label htmlFor="my-modal-5" className="btn btn-error font-bold" onClick={() => handleModalData(props.data.id)}>
                            Read More
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ccard;
