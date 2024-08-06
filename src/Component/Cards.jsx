import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Style/Cards.css';
import image1 from '../assets/First.png';
import image2 from '../assets/Second.webp';
import image3 from '../assets/Third.png';
import image4 from '../assets/Fourth.png';
import image5 from '../assets/Fifth.png';
import image6 from '../assets/Sixth.png';

const CardItem = ({ imageSrc, title, text }) => (
    <Card className="my-card">
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
            <Card.Title className="card-title2">{title}</Card.Title>
            <Card.Text className='card-text2'>{text}</Card.Text>
        </Card.Body>
    </Card>
);

function Cards() {
    return (
        <div className="container">
            <div className="row top-margin service-card">
                <div className="col-md-4 mb-4">
                    <CardItem
                        imageSrc={image1}
                        title="Easy Customization"
                        text="Our solutions offer unparalleled flexibility, allowing for effortless customization to perfectly fit your unique needs. Adapt and modify features with ease to ensure a tailored experience. Get the personalized functionality you deserve."
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardItem
                        imageSrc={image2}
                        title="Bug-Free Code"
                        text="Quality is our top priority. We deliver meticulously crafted, bug-free code that guarantees reliability and optimal performance for all your projects. Experience seamless software solutions with zero bugs."
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardItem
                        imageSrc={image3}
                        title="High Resolution"
                        text="Enjoy stunning clarity with our high-resolution outputs. We provide crisp, detailed visuals that enhance the effectiveness and appeal of your digital content. Achieve the highest quality visuals for your business."
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <CardItem
                        imageSrc={image4}
                        title="Innovative Solutions"
                        text="Stay ahead with our cutting-edge technologies and innovative approaches. Our forward-thinking solutions drive progress and set new standards in the industry. Embrace the future with our advanced IT services."
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardItem
                        imageSrc={image5}
                        title="Robust Security"
                        text="Your data’s security is paramount. Our comprehensive security measures protect against threats, ensuring your information remains safe and secure at all times. Trust in our robust cybersecurity solutions."
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <CardItem
                        imageSrc={image6}
                        title="Dedicated Support"
                        text="We are committed to your success. Our dedicated support team is always ready to assist you, providing expert guidance and timely solutions to any challenges you may face. Rely on our 24/7 customer support for peace of mind."
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;
