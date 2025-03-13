import styles from './Styles/Header.module.css';
import menu from '../assets/Header/Menu.png';
import notification from '../assets/Header/Notification.png';
import column from '../assets/Header/Column.png';
import setting from '../assets/Header/Setting.png';
import Answering from '../assets/Answering.png'

export default function Header(){
    return(
        <>
            <div className={styles.fixheader}>
                <div className={styles.left}>
                    <img src={menu} className={styles.menu}/>
                    <img src={Answering} className={styles.logo}/>
                </div>
                <div className={styles.right}>
                    <img src={notification} className={styles.notification}/>
                    <img src={column} className={styles.column}/>
                    <img src={setting} className={styles.setting}/>
                </div>
            </div>
        </>
    );
}