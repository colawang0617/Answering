import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from './Entering.module.css';
import Answering from "../assets/Answering.png";
import Password from "../assets/Password.svg";
import Username from "../assets/Username.svg";

function Entering(){

    const navigate = useNavigate();

    const handleClick = (username,passward) => {
        if(username === "Cola" && passward === "123456"){
            navigate('/Home');
        }
        else{
            console.log("Wrong!");
        }
    };

    const [username, setUsername] = useState("");
    const [passward, setPassward] = useState("");

    return(
        <>
        <div className={styles.entering}>
            <img src={Answering} className={styles.title} />
            <div className={styles.userbox}>
                <h1>Welcome Menauler!</h1>
                <div className={styles.userinput}>
                    <img src={Username} className={styles.icon}/>
                    <input 
                        type="text"
                        placeholder="Enter your username"
                        onChange={(e) => {
                            setUsername(e.target.value); 
                        }}>
                            
                    </input>
                </div>
                <div className={styles.userinput}>
                    <img src={Password} className={styles.icon}/>
                    <input 
                        type="text"
                        placeholder="Enter your passward"
                        onChange={(e) => {
                            setPassward(e.target.value); 
                        }}>
                    </input>
                </div>
                <button onClick={() => handleClick(username,passward)}>Sign In</button>
            </div>
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Cola's Website {">>"} Answering</p>
            </footer>
        </div>
        </>
    );
}

export default Entering