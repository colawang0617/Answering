import styles from "./Home1.module.css"
import Card1 from "../Components/Card1";
import Top from "../Components/Top";
import Header from "../Components/Header"
import Profile from "../Components/Profile";
import image1 from "../assets/Course/calculus.jpg"
import image2 from "../assets/Course/arthistory.jpg"
import image3 from "../assets/Course/physics.jpg"
import image4 from "../assets/Course/chemistry.jpg"
import image5 from "../assets/Course/microeconomics.jpg"
import image6 from "../assets/Course/macroeconomics.jpg"
import image7 from "../assets/Course/psychology.jpg"
import image8 from "../assets/Course/seminar.jpg"

function Home() {
  const cards = [
    {id:1,image:image1,course:'Calculus BC', subtitle:'Trancy'},
    {id:2,image:image2,course:'Art History', subtitle:'Walker'},
    {id:3,image:image3,course:'Physics'},
    {id:4,image:image4,course:'Chemistry'},
    {id:5,image:image5,course:'Microeconomics'},
    {id:6,image:image6,course:'Macroeconomics'},
    {id:7,image:image7,course:'Psychology'},
    {id:8,image:image8,course:'Seminar'},

  ]

  return (
    <>
    <div className={styles.home}>
      <div>
        {cards.map((card) => (
          <Card1 key={card.id} id={card.id} image={card.image} course={card.course} subtitle={card.subtitle} />
        ))}
      </div>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Cola's Website {">>"} Answering</p> 
      </footer>
    </div>
    </>
  );
}

export default Home;
