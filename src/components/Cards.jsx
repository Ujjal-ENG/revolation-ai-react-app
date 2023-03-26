import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Ccard from './Ccard';
import ShowModal from './ShowModal';

const Cards = () => {
    const [data, setData] = useState('');
    const [showAll, setShowAll] = useState(false);
    const [modalId, setModalId] = useState(null);
    const [modalData, setModalData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const loadData = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const dataJson = await loadData.json();
        setData(dataJson.data.tools);
    };

    const handleLoadData = () => {
        setShowAll(!showAll);
    };

    const handleModalData = (id) => {
        setModalId(id);
    };

    useEffect(() => {
        fetChModalData(modalId);
    }, [modalId]);

    const fetChModalData = async (ids) => {
        const fetchData = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${ids}`);
        const data = await fetchData.json();
        setModalData(data.data);
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-6 justify-items-center my-10">
                {data &&
                    data.slice(0, showAll ? 12 : 6).map((el) => {
                        return <Ccard key={el.id} data={el} handleModalData={handleModalData} />;
                    })}
            </div>
            {!showAll && (
                <div className=" flex justify-center ">
                    <button className={`btn btn-error flex justify-center font-bold`} onClick={handleLoadData}>
                        Show More
                    </button>
                </div>
            )}

            <ShowModal modalData={modalData} />
        </>
    );
};

export default Cards;
