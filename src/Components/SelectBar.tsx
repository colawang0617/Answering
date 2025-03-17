import { useState, useEffect,useRef } from 'react';
import style from './Styles/SelectBar.module.css';
import searchIcon from '../assets/search-icon.png';
import arrow from '../assets/dropArrow.png';
export default function SelectBar(){

    const [isOpen, setIsOpen] = useState(false);
    
    const dropdownRef = {
        Classes: useRef(null),
        Level: useRef(null),
        Date: useRef(null),
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !dropdownRef.Classes.current ?.contains(event.target) &&
                !dropdownRef.Level.current ?.contains(event.target) &&
                !dropdownRef.Date.current ?.contains(event.target)
            ) {
                    setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClick = (name) => {
        if(isOpen === name){
            setIsOpen(false);
        }
        else{
            setIsOpen(name);
        }
    }

    const imgClick = () => {
        console.log("hello");
    }
    return(
        <>
        <div className={style.selectBar}>
            <div className={style.leftbutton}>
                <div className={style.kind} ref={dropdownRef.Classes}>
                    <button className={style.kindButton1} onClick={() => handleClick("Classes")} >Classes</button>
                    {isOpen === "Classes" && 
                        <div className={style.dropbtn}>
                           <button >All</button>
                           <button>AP</button> 
                           <button>Honors</button> 
                           <button>Regular</button>  
                        </div>}
                    <img src={arrow} alt='dropdown-Arrow' className={style.arrow}/>
                </div>
                <div className={style.kind} ref={dropdownRef.Level}>
                    <button className={style.kindButton} onClick={() => handleClick("Level")}>Level</button>
                    {isOpen === "Level" && 
                        <div className={style.dropbtn}>
                           <button>All</button>
                           <button>AP</button> 
                        </div>}
                    <img src={arrow} alt='dropdown-Arrow' className={style.arrow}/>
                </div>
                <div className={style.kind} ref={dropdownRef.Date}>
                    <button className={style.kindButton} onClick={() => handleClick("Date")}>Date</button>
                    {isOpen === "Date" && 
                        <div className={style.dropbtn}>
                           <button>All</button>
                           <button>AP</button> 
                           <button>Honors</button> 
                        </div>}
                    <img src={arrow} alt='dropdown-Arrow' className={style.arrow}/>
                </div>
            </div>
            <div className={style.search}>
                <input
                    placeholder='Please enter your search'
                    className={style.searchInput}
                />
                <img src={searchIcon} alt='searchIcon' className={style.searchIcon} onClick={imgClick}/>
            </div>
            <button>Reset</button>
        </div>
        </>
    )
}