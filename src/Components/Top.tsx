import Profile from "./Profile";
import styles from "./Top.module.css"
import { useEffect, useState, useRef } from "react";

function Top(){

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = {
        all: useRef(null),
        date: useRef(null),
        type: useRef(null),
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !dropdownRef.all.current ?.contains(event.target) &&
                !dropdownRef.date.current ?.contains(event.target) && 
                !dropdownRef.all.current ?.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (dropdownName) => {
        setIsOpen(isOpen === dropdownName ? false : dropdownName);
    }
    return(
        <>
        <div className={styles.topcolumn}>
            <div className={styles.dropdown} ref={dropdownRef.all}>
                <button onClick={() => toggleDropdown("all")} className={styles.dropbtn}>
                    All
                </button>
                {isOpen === "all" && (
                    <div className={styles.dropcnt}>
                        <button>Pinned</button>
                        <button>Favorite</button>
                    </div>
                )}
            </div>
            <div  className={styles.dropdown} ref={dropdownRef}>
                <button onClick={() => toggleDropdown("date")} className={styles.dropbtn}>
                    Date
                </button>
                {isOpen === "date" && (
                    <div className={styles.dropcnt}>
                        <button>Date1</button>
                        <button>Date2</button>
                        <button>All</button>
                    </div>
                )}
            </div>
            <div className={styles.dropdown}>
                <button onClick={() => toggleDropdown("type")} className={styles.dropbtn}>
                    Type
                </button>
                {isOpen === "type" && (
                    <div className={styles.dropcnt}>
                        <button>AP</button>
                        <button>Honors</button>
                        <button>Regular</button>
                    </div>
                )}
            </div>
            <input type="text" placeholder="Please Enter Your Search" className={styles.search}></input>
        </div>
        </>
    );
}

export default Top