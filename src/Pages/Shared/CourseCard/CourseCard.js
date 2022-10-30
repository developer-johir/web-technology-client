import React from 'react';

const CourseCard = ({course}) => {
    return (
        <div>
            <p>{course.author.img}</p>
            <img src={course.image_url} alt="" />
        </div>
    );
};

export default CourseCard;