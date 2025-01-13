import { useNavigate, } from 'react-router-dom';
import styles from './Card1.module.css'

function Card1(props){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/Home/${props.id}`,{state: {course: props.course}});
    }
    return(
        <>
        <div className={styles.course} onClick={handleClick}>
            <img src={props.image} alt={props.course} className={styles.pic}></img>
            <h2>{props.course}</h2>
            <p>{props.subtitle}</p>
        </div>
        </>
    );
}

Card1.defaultProps = {
    image: '',
    course: "unknown",
    subtitle: "unknown",
    id:null,
}

export default Card1