import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaDiscord, FaYoutube } from 'react-icons/fa';

import img1 from "../../assets/qZone1.png"
import img2 from "../../assets/qZone3.png"
import img3 from "../../assets/qZone3.png"
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const RightComponent = () => {
    const { googleSignIn } = useContext(AuthContext)
    return (
        <div>
            <div className='bg-nfo'>
                <Button onClick={googleSignIn} className='mb-2 w-100' variant="outline-primary"><FaGoogle className='me-1'></FaGoogle>Login With Google</Button>
                <Button className='w-100 mt-0' variant="outline-dark">
                    <FaGithub className='me-1'></FaGithub>Login With Github</Button>
            </div>
            <h6 className='mt-4'>Find Us on</h6>

            <ListGroup>
                <ListGroup.Item className='mb-2 me-1'>
                    <FaFacebook className=' me-1'></FaFacebook>FaceBook
                </ListGroup.Item>
                <ListGroup.Item className='mb-2 me-1'>
                    <FaYoutube className=' me-1'></FaYoutube>YouTube
                </ListGroup.Item>
                <ListGroup.Item className='mb-2'>
                    <FaWhatsapp className=' me-1'>
                    </FaWhatsapp>Whatsapp
                </ListGroup.Item>
                <ListGroup.Item className='mb-2'>
                    <FaTwitter className=' me-1'></FaTwitter>Twitter
                </ListGroup.Item>
                <ListGroup.Item className='mb-2'>
                    <FaDiscord className=' me-1'></FaDiscord>Discord
                </ListGroup.Item>
            </ListGroup>
            <div>
                <h4 className='mt-3'>Brand Pratners</h4>

                <Carousel>
                    <Carousel.Item>
                        <img src={img1} alt='' text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} alt='' text="Second slide" />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} alt='' text="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightComponent;