import styles from './Styles/Question.module.css'
import { useNavigate } from 'react-router-dom'

function Question(props){
    const navigate = useNavigate()

    const handleClick = ()=> {
        navigate(`/Home/${props.id}/answer`);
    }
    return (
        <>
        <div className={styles.question} onClick={handleClick}>
            <h4>{props.Title}</h4>
            <p><strong>id:</strong> {props.id}</p>
            <p><strong>description</strong> {props.description}</p>
            <p><strong>time:</strong> {props.time}</p>
        </div>
        </>
    )
}

export default Question