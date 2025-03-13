import { useNavigate, } from 'react-router-dom';
import styles from './Styles/Card1.module.css'

export default function Card1({id,image,course,subtitle}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/Home/${id}`,{
            state: {course: course},
        });
    };
    return(
        <>
        <div className={styles.course} onClick={handleClick}>
            <img src={image} alt={course} className={styles.pic}></img>
            <h2>{course}</h2>
            <p>Teacher: {subtitle}</p>
        </div>
        </>
    );
}

Card1.defaultProps = {
    image: '',
    course: "TBA",
    subtitle: "TBD",
    id:null,
}