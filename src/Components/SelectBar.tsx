import style from './Styles/SelectBar.module.css';
import searchIcon from '../assets/search-icon.png';
import arrow from '../assets/dropArrow.png';
export default function SelectBar(){
    return(
        <>
        <div className={style.selectBar}>
            <div className={style.leftbutton}>
                <div className={style.kind}>
                    <button className={style.kindButton1}>Classes</button>
                    <img src={arrow} alt='dropdown-Arrow' className={style.arrow}/>
                </div>
                <div className={style.kind}>
                    <button className={style.kindButton}>Level</button>
                    <img src={arrow} alt='dropdown-Arrow' className={style.arrow}/>
                </div>
                <div className={style.kind}>
                    <button className={style.kindButton}>Date</button>
                    <img src={arrow} alt='dropdown-Arrow' className={style.arrow}/>
                </div>
            </div>
            <div className={style.search}>
                <input
                    placeholder='Please enter your search'
                    className={style.searchInput}
                />
                <img src={searchIcon} alt='searchIcon' className={style.searchIcon}/>
            </div>
            <button>Reset</button>
            
        </div>
        </>
    )
}