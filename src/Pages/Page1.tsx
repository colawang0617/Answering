import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from './Page1.module.css'
function Page1(){
    const {id} = useParams();
    const location = useLocation();
    const courseName = location.state?.course || "Unknown";
    const navigate = useNavigate();

    function handleClick(){
        navigate('/Home');
    }
    return (
        <>
            <div className={styles.top}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.bi} viewBox="0 0 16 16" onClick={handleClick}>
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
                <h1> {courseName} </h1>
            </div>
            <div className={styles.qbox}>
                <p>Hello</p>
                <p>Hey</p>
                <p>What's up</p>
            </div>
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} Cola's Website {">>"} Answering</p> 
            </footer>
        </>
    );
}

export default Page1;