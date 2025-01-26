import styles from './Question.module.css'

function Question(props){
    return (
        <>
        <div className={styles.question}>
            <h4>{props.Title}</h4>
            <p><strong>id:</strong> {props.id}</p>
            <p><strong>description</strong> {props.description}</p>
            <p><strong>time:</strong> {props.time}</p>
        </div>
        </>
    )
}

export default Question