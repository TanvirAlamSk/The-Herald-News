import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Newses = () => {
    const newses = useLoaderData()

    // const [news, setNews] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:5000/news")
    //         .then((responce) => responce.json())
    //         .then((data) => console.log(data))
    // }, [])
    return (
        <div>
            <h2>NEWS file {newses.length}</h2>
        </div>
    );
};

export default Newses;