import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../../components/NewsSummeryCard/NewsSummeryCard';

const News = () => {
    const allnews = useLoaderData()
    return (
        <div>

            {allnews.length == 0 ?
                <h2>There is no NEWS on this topic</h2>
                :

                allnews.map((news) => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
            }

        </div>
    );
};

export default News;