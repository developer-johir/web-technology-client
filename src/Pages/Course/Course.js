import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import CourseCard from '../Shared/CourseCard/CourseCard';
import './Course.css'

const Course = () => {
  const allCourse = useLoaderData();

  return (
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <Category></Category>
          </Col>
          <Col lg="9" className="m- m-auto py-5">
            <Row className="">
              <Col lg="4" className="course-card">
                {allCourse.map((course) => (
                  <CourseCard key={course._id} course={course}></CourseCard>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
