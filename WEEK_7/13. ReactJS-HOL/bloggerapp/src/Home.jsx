import React from "react";
import BookDetails from "./components/BookDetails";
import CourseDetails from "./components/CourseDetails";
import BlogDetails from "./components/BlogDetails";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <CourseDetails />
      <hr className={styles.hr} />
      <BookDetails />
      <hr className={styles.hr} />
      <BlogDetails />
    </div>
  );
};

export default Home;
