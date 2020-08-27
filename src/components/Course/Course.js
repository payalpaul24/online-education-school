import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Col, Card, CardGroup, Button } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const { title, img, author, rating, price, Level } = props.courseDetail;

    return (
        
        <Col lg={4} md={6}>
            <div className="course"></div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p><strong>Instructor:</strong> {author}</p>
                            <p><strong>Rating:</strong> {rating}</p>
                            <p><strong>Level:</strong> {Level}</p>
                            <p><strong>Price:</strong> ${price}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="info" size="sm" block onClick={() => props.handleEnrollCourses(props.courseDetail)}>
						<FontAwesomeIcon icon={faShoppingCart} /> Enroll now
					</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
		</Col>
       
    );
};

export default Course;