import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Front-end web development is the development of the graphical 
            user interface of a website, through the use of HTML, CSS, and 
            JavaScript, so that users can view and interact with that website.
            <br />
            <br />
            Front-end web development is the development of the graphical 
            user interface of a website, through the use of HTML, CSS, and 
            JavaScript, so that users can view and interact with that website.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Front-end web development is the development of the graphical 
            user interface of a website, through the use of HTML, CSS, and 
            JavaScript, so that users can view and interact with that website.
            <br />
            <br />- Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact"/>
        </div>

      </div>
    </div>
  );
};

export default About;
