import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Gallery from "../../components/Gallery/Gallery";
import "./CharacterPage.scss"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function CharacterPage(){

    const [characters, setCharacters] = useState();
    const [searchValue, setSearchValue] = useState("");
    
    useEffect(()=>{
        const charCopy = [];
        let info = [];
        axios.get("http://localhost:3000/characters").then(res => {
            info = res.data;
            for (const char of info) {
                if(char.name.toLowerCase().includes(searchValue.toLowerCase())){
                    charCopy.push(char);
                }
            }
            setCharacters(charCopy);
        })
    },[searchValue])

    return(
        <div className="charpage">
            <Header data={{searchValue,setSearchValue}}/>
            <Gallery type="character" data={characters}></Gallery>
            <Footer />
        </div>
    )
}