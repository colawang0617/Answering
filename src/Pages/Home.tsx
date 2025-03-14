import Card1 from "../Components/Card1";
import Header from "../Components/Header";
import SelectBar from "../Components/SelectBar";
import style from "./Home.module.css";
import courseData from "../courseData.js";
import Ann from "../Components/Ann.js"


export default function Home(){

    return(
        <>
            <div className={style.home}>
                <Header/>
                <SelectBar/>
                <div className={style.course}>
                    <Ann/>
                    {courseData.map((courseData) => (
                        <Card1 key={courseData.id} id={courseData.id} image={courseData.image} course={courseData.course} subtitle={courseData.subtitle} />
                    ))} 
                </div>
                
            </div>
        </>
    );
}