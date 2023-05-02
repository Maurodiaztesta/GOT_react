import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./HousePage.scss"
export default function HousePage(){

    const [houses, setHouses] = useState("");
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const houseCopy = [];
        let info = [];
        axios.get("http://localhost:3000/houses").then(res => {
            info = res.data;
            setHouses(res.data);
            for( const house of info){
                if(house.name.toLowerCase().includes(searchValue.toLowerCase())){
                    houseCopy.push(house);
                }
            }
            setHouses(houseCopy)
        })
    },[searchValue])

    return(
        <div className="housepage">
            <Header data={{searchValue,setSearchValue}}/>
            <Gallery type="house" data={houses}></Gallery>
            <Footer />
        </div>
    )
}