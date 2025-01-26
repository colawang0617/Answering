import styles from './Profile.module.css'
import Cola from '../assets/Cola.jpeg'

function Profile(){
    return (
        <>
            <div className={styles.name}>
                <img src={Cola} className={styles.pic}></img>
            </div>
        </>
    );
}

export default Profile;