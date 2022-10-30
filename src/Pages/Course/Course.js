import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Course = () => {
    const allCourse = useLoaderData();
    console.log(allCourse);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        <Category></Category>
                    </Col>
                    <Col lg="9">
                    {
                            allCourse.map(course => <CourseCard
                                key={course._id}
                                course={course}
                            ></CourseCard>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;