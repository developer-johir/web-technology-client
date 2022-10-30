import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseCard = ({ course }) => {
  return (
    <div className="d-flex">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="" variant="top" src={course.thumbnail_url} />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the
            card's content.
          </Card.Text>
          <Button variant="primary">Course details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
