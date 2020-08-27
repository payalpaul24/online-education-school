import React from 'react';
import fakeData from '../../fakeData';
import { useState } from "react";
import './CourseDetails.css';
import { Row, Col } from 'react-bootstrap';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const CourseDetails = () => {
    const courseFakeData = fakeData.slice(0, 15);
    const [courseDetails, setCourseDetails] = useState(courseFakeData);
    const [cart, setCart] = useState([]);

    const handleEnrollCourses = (courseDetail) =>{
        const newCart = [...cart, courseDetail];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="course-details">
                <Row>
                    <Col xs={7} sm={9}>
                        <h2 className="">Our Latest Courses</h2>
                        <Row>
                            {
                                courseDetails.map(courseDetail => <Course handleEnrollCourses={handleEnrollCourses} courseDetail={courseDetail}></Course>)
                            }
                        </Row>
                    </Col>
                    <Col xs={5} sm={3}>
                        <Cart cart={cart}></Cart>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default CourseDetails;