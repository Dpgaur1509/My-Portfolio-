import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const redirectToGitHub = () => {
  window.open('https://github.com/Dpgaur1509', '_blank');
};

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
    title: "Music-School Website",
    img:"https://images.template.net/wp-content/uploads/2017/03/18073506/Music-School-Website-Logo.jpg",
    desc: "I created a music school website using Next.js and Tailwind CSS, enhanced with advanced animations using Framer Motion. The frontend features dynamic shadow effects, animated cards, and running text, providing a next-level user experience. The website includes a user-friendly contact section, allowing students to easily connect with the organization, and an animated teacher section showcasing instrument-specific cards for each teacher. This combination of sleek design, interactivity, and functionality delivers an engaging and seamless experience for both students and users, ensuring a modern and professional web solution.",
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
            <button onClick={redirectToGitHub}>See Code</button>
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