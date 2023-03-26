import React from 'react';

const ShowModal = (props) => {
    const { description, features, integrations } = props.modalData;

    const Img = props.modalData.image_link;

    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="font-bold text-lg">{description}</h3>

                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-bold text-lg">Features</h3>
                                    {!features ? 'No data Found' : Object.values(features).map((el, i) => <li key={i}>{el.feature_name}</li>)}
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg">Integrations</h3>
                                    {!integrations ? 'No data Found' : integrations && integrations.map((el, i) => <li key={i}>{el}</li>)}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img src={Img && Img[0]} alt="" />
                            {/* {score && score ? <div className="badge badge-lg top-2 right-0">{score}</div> : ''} */}
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">
                            X
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowModal;
