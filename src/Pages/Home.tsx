import Header from "../Components/Header";
import SelectBar from "../Components/SelectBar";
import style from "./Home.module.css";
export default function Home(){
    return(
        <>
            <div className={style.home}>
                <Header/>
                <SelectBar/>
            </div>
        </>
    );
}