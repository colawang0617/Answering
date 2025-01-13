import { useNavigate } from "react-router-dom";
import styles from './Entering.module.css';

function Entering(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Home');
    };

    return(
        <>
        <div className={styles.entering}>
            <h1 className={styles.title}>Menaul School Qingdao</h1>
            <input type="text" placeholder="Username" className={styles.information}></input>
            <br></br>
            <input type="text" placeholder="Passward" className={styles.information}>
            </input>
            <br></br>
            <button className={styles.signin} onClick={handleClick}>Sign In</button>
        </div>
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Cola's Website {">>"} Answering</p>
        </footer>
        </>
    );
}

export default Entering