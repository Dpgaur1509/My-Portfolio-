import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Book-Store",
    img: "https://cdn.pixabay.com/photo/2019/04/16/21/53/bookstore-4132887_1280.jpg",
    desc: "Explore my Bookstore Project, a dynamic fusion of React.js, Node.js, Express.js, and MongoDB. Users can effortlessly add book summaries with titles, authors, and dates, showcasing my adeptness in full-stack development, enabling seamless interaction and organization in a captivating and intuitive user interface.",
  },
  {
    id: 2,
    title: "Online Game",
    img: "https://media.istockphoto.com/id/1412860430/photo/tic-tac-toe-set-on-yellow-background-flat-lay.jpg?s=1024x1024&w=is&k=20&c=8JTQKlpklPqcfQHsid0YPPvs919gGbRdSUB5tprQkus=",
    desc: "Dive into my Online Multiplayer Tic Tac Toe game, a real-time experience crafted with React.js, Express.js, Node.js, and Socket.io. Designed with websockets, this project showcases my skills in creating engaging and interactive multiplayer environments, allowing multiple players to enjoy the classic game in a virtual space.",
  },
  {
    id: 3,
    title: "Text-extractor",
    img: "https://media.istockphoto.com/id/1448124439/vector/web-development-programming-and-code-testing-ui-concept-with-laptop-displaying-futuristic.jpg?s=1024x1024&w=is&k=20&c=tJoG56Y1oHTWbRsPvfFnNYkZkWU5ohSQr30Lq2DX9vM=",
    desc: "Explore my Text Extractor project, a seamless blend of React.js, Node.js, Express.js, Tesseract OCR library, and Multer for static storage. This application effortlessly extracts text from images, showcasing my proficiency in building efficient solutions for seamless data extraction in a user-friendly interface.",
  },
  {
    id: 4,
    title: "AgroSynergetic Model",
    img: "https://media.istockphoto.com/id/819218756/vector/rice-on-a-rice-field-background.jpg?s=1024x1024&w=is&k=20&c=kymAKju1yr5AKwyuatYhXepXD60LZuEulfMCEnW6ptM=",
    desc: "Discover Agrosynergetic, my agriculture advancement project. Fueled by machine learning, it recommends crops based on soil parameters like nitrogen, potassium, calcium, and pH. This innovative model also suggests specific fertilizers, showcasing my commitment to leveraging technology for sustainable and informed agricultural practices.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;