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
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Weather App</h2>
          <p>
          Dive into my weather map project, skillfully crafted with React.js and OpenWeatherMap API. Experience real-time weather updates presented in an intuitive interface. This project reflects my proficiency in front-end development, delivering dynamic and visually engaging solutions.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>News App</h2>
          <p>
          Dive into my dynamic News App project, crafted with React.js and fueled by the Open News API. Witness my proficiency in frontend development as I deliver a sleek, responsive application, providing users with real-time, curated news experiences.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>To-Do List App</h2>
          <p>
          Discover my To-Do List project, a seamless blend of EJS, Node.js, Express.js, and MongoDB. Experience the power of organized task management with a user-friendly interface, showcasing my skills in full-stack development and data persistence.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;