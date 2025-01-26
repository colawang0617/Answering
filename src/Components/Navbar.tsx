import styles from './Navbar.module.css'
import Profile from './Profile'

function Navbar(){
    return(
        <>
            <div className={styles.top}>
                <Profile/>
            </div>
            
        </>
    );
}

export default Navbar