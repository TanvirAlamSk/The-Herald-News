import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaBookOpen, FaBookmark, FaEye, FaShare, FaStar, FaStreetView } from 'react-icons/fa';

const Singlenews = () => {
    const report = useLoaderData()
    return (
        <Card className="">
            <Card.Header className='pb-0'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <div>
                            <Image className="me-2" style={{ width: "50px" }} src={report.author?.img} roundedCircle />
                        </div>
                        <div>
                            <p className='mb-0'><small>{report.author?.name}</small></p>
                            <p><small>{report.author?.published_date}</small></p>
                        </div>
                    </div>
                    <div>
                        <span className='me-3 mt-0'><FaBookmark></FaBookmark></span>
                        <FaShare></FaShare>
                    </div>
                </div>
            </Card.Header>

            <Card.Body>
                <Card.Title>{report.title}</Card.Title>
                <Card.Img variant="top" src={report.image_url} />
                <Card.Text>
                    {report.details}
                </Card.Text>
                <Button variant="primary"><Link style={{ textDecoration: "none" }} className='text-white' to={`/news-category/${report.category_id}`} >Back</Link></Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex justify-content-between'>
                    <div><FaStar className='text-warning'></FaStar> {report.rating.number}</div>
                    <div><FaEye></FaEye> {report.total_view}</div>
                </div>

            </Card.Footer>
        </Card>
    );
};

export default Singlenews;