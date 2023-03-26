import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Ccard from './Ccard';

const Cards = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const loadData = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const dataJson = await loadData.json();
        setData(dataJson.data.tools);
    };
    return (
        <div className="grid grid-cols-3 gap-6 justify-items-center my-10">
            {data &&
                data.map((el) => {
                    return <Ccard key={el.id} data={el} />;
                })}
        </div>
    );
};

export default Cards;
