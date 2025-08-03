import React from "react";
import { courses } from "../Courses";

const CourseDetails = () => {
  const coursedata = (
    <ul>
      {courses.map((item) => (
        <div key={item.id}>
          <h3>{item.cname}</h3>
          <h4>{item.date}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      <div className="course-details">
        <h1>Course Details</h1>
        {coursedata}
      </div>
    </div>
  );
};

export default CourseDetails;
