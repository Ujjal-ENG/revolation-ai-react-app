import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from './Button';

const Ccard = (props) => {
    const { name, description, image, features } = props.data;
    const date = props.data.published_in;

    const [modalData, setModalData] = useState('');

    const handleReadMore = (id) => {};
    useEffect((id) => {
        fetChModalData(id);
    }, []);

    const fetChModalData = async (id) => {
        const fetchData = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
        const data = fetchData.json();
        setModalData(data.data);
    };

    return (
        <>
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
                    <div className="card-actions flex justify-between items-center" onClick={() => handleReadMore(props.data.id)}>
                        <h2 className="card-title">{date}</h2>

                        <label htmlFor="my-modal-5" className="btn btn-error font-bold">
                            Read More
                        </label>
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn">
                                    Yay!
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ccard;
