import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const redirectToGitHubUrlShortner = () => {
  window.open('https://github.com/Dpgaur1509/Url-Shortner', '_blank');
};
const redirectToGitHubBlogify = () => {
  window.open('https://github.com/Dpgaur1509/Blog-website', '_blank');
};
const redirectToGitHubTextextractor = () => {
  window.open('https://github.com/Dpgaur1509/Text-extractor', '_blank');
};
const redirectToGitHubWeatherapp = () => {
  window.open('https://github.com/Dpgaur1509/Weather-App', '_blank');
};



const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on learning new technologies
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Some</motion.b> Projects
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Form My </motion.b> Learning
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Url Shortner</h2>
          <p>
          Explore my innovative URL shortener project powered by Node.js and Express.js. With a seamless blend of efficiency and simplicity, this project showcases my expertise in backend development. Witness the power of concise, user-friendly URLs in action, demonstrating my commitment to crafting solutions that enhance user experience and functionality.
          </p>
          <button onClick={redirectToGitHubUrlShortner}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Weather App</h2>
          <p>
          Dive into my weather map project, skillfully crafted with React.js and OpenWeatherMap API. Experience real-time weather updates presented in an intuitive interface. This project reflects my proficiency in front-end development, delivering dynamic and visually engaging solutions.
          </p>
          <button onClick={redirectToGitHubWeatherapp}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ImageTextify</h2>
          <p>
          Explore my Text Extractor project, a seamless blend of React.js, Node.js, Express.js, Tesseract OCR library, and Multer for static storage. This application effortlessly extracts text from images, showcasing my proficiency in building efficient solutions for seamless data extraction in a user-friendly interface.
          </p>
          <button onClick={redirectToGitHubTextextractor}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Blogify - A Full-Stack Blog Platform 🚀</h2>
          <p>
          Blogify is a full-stack blog platform featuring secure user authentication with JWT for data security. Built with React.js and Bootstrap for a responsive frontend, users can write, read, update, delete posts, and comment on others’ content. The backend is powered by Node.js and Express.js, providing efficient server management, while MongoDB ensures scalable and reliable data storage. This project demonstrates a well-rounded full-stack solution with a focus on user experience and data integrity.
          </p>
          <button onClick={redirectToGitHubBlogify}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;