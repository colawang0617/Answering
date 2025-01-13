import Profile from "./Profile";
import styles from "./Top.module.css"

function Top(){
    return(
        <>
        <div className={styles.top1}></div>
        <div className={styles.topcolumn}>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>All</button>
                <div className={styles.dropcnt}>
                    <p>Pinned</p>
                    <p>Favorite</p>
                </div>
            </div>
            <div  className={styles.dropdown}>
                <button className={styles.dropbtn}>Date</button>
                <div className={styles.dropcnt}>
                    <p>Date1</p>
                    <p>Date2</p>
                    <p>All</p>
                </div>
            </div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>AP</button>
                <div className={styles.dropcnt}>
                    <p>Honors</p>
                    <p>Regular</p>
                </div>
            </div>
            <input type="text" placeholder="Please Enter Your Search" className={styles.search}></input>
        </div>
        </>
    );
}

export default Top