import Header from "../Components/Header";
import style from "./Course1.module.css"
import teacher from "../assets/Teacher.jpg"
import SelectBar from "../Components/SelectBar";
import Question from "../Components/Question";

export default function Course1(){
    return(
        <>
            <Header/>
            <div className={style.courseDescription}>
                <div className={style.coursePicture}>
                    <img src={teacher} className={style.picture}/>
                </div>
                <h1>Welcome to Calculus BC</h1>
                <p>
                We are a Q&A platform that you can post or answer any question, get help from and help your classmates and teachers  
                Vestibulum eros dolor, molestie sed posuere id, egestas nec turpis. Nullam imperdiet blandit nisl. Aliquam rhoncus convallis lectus 
                id faucibus. Mauris pretium tincidunt rhoncus. Praesent nec enim nec massa suscipit congue. Fusce eget pharetra justo. In ut varius 
                neque.
                </p>
                <p>
                At here, you can ask Calculus BC:
                Homework Questions;
                Study Advise;
                Useful Resourses;
                </p>
            </div>
            <button>Ask a Question</button>
            <div className={style.rightContainer}>
                <div className={style.selectBar}>
                    <SelectBar/>
                </div>
                <div className={style.question}>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                </div>
                
            </div>
            
        </>
    )
}