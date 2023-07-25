import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsSummeryCard = ({ news }) => {
    const { title, author, image_url, details, _id } = news
    return (
        <div className='mb-4'>
            <Card >
                <Card.Title className='px-4 mt-4 text-center'>{title}</Card.Title>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.slice(0, 200)}...
                    </Card.Text>
                    <p className='pt-0 mt-0' ><Link to={`/news/${_id}`} style={{ textDecoration: 'none' }}>Read more.</Link></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;