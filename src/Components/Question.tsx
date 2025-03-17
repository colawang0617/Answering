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
            <h4>This is a very good question</h4>
            <p>dit nisl. Aliquam rhoncus convallis lectus id faucibus. Mauris pretium tincidunt rhoncus. Praesent nec enim nec massa suscipit congue. Fusce eget pharetra justo. In ut varius neque.</p>
        </div>
        </>
    )
}

export default Question