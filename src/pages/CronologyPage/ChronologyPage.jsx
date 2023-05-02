import axios from "axios";
import { useEffect, useState } from "react";
import "./ChronologyPage.scss"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function ChronologyPage(){
   
    const [characters, setCharacters] = useState();
    let [sortMinToMax, setSortMinToMax] = useState(true);
    let [isRotated, setIsRotated] = useState(true);
    useEffect(()=>{
        axios.get("http://localhost:3000/characters").then(res => {
            const sortedCharacters = sortByNumber(res.data);
            setCharacters(sortedCharacters);
        })
       
    },[])

    const sortByNumber = (array) => {
        if(sortMinToMax){
            array.sort((a, b) => a.age - b.age);
            setSortMinToMax(false);
        }else{
            array.sort((a, b) => b.age - a.age);
            setSortMinToMax(true);
        }
        setIsRotated(!isRotated);
        return array;
    }
    
    return(
        <div className="chronology">
            <Header />
            <div className="chronology__main">
                {characters && <div onClick={() => {sortByNumber(characters)}} className="sort">{characters[0].age}</div>}
                <div className="barra" />
                <img  className={isRotated ? "arrow rotated" : "arrow"} src="/flecha.png" alt="flecha"/>
                {characters && characters.map((char,index) => 
                    <div className={index%2 === 0 ? "chronology__main--item__left" : "chronology__main--item__right"} key={index}>

                        <p>{char.name}</p>
                        <p>{char.age}</p>
                        <img src={"http://localhost:3000/"+char.image} alt={char.name} />
                    </div>
                )}
            </div>
           
            <Footer />
        </div>
    )
}