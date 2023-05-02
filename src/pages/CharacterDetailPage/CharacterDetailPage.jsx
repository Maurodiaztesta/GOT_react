import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./CharacterDetailPage.scss"
import Header from "../../components/Header/Header";

export default function CharacterDetailPage(){
    const {id} = useParams();
    const [char, setChar] = useState("");
    let houses=[];
    let pers = [];
    let [house,setHouse] = useState();
    useEffect(() => {

        axios.get(`http://localhost:3000/characters/${id}`).then(res => {
            setChar(res.data);
            pers = res.data;
        })
        
        axios.get("http://localhost:3000/houses").then(res2 => {
            houses = res2.data;
            
            for(let i = 0; i < houses.length; i++){
                    if(houses[i].name === pers.house){
                        setHouse(houses[i].image);
                    }
                }
            })
         },[])

    return(
        <div className="main">
            <Header></Header>
            <div className="divPadre">
                <div className="divPadre__personaje">
                    {char.image && <img className="divPadre__personaje--img" src={"http://localhost:3000/"+char.image} alt={char.name}></img>}
                    <h2 className="divPadre__personaje--name">{char.name}</h2>
                </div>
                {char && (
                    <div className="divPadre__contenedores">
                        <div className="divPadre__contenedores--ind">
                            <h3 className="divPadre__contenedores--ind--house">House</h3>
                            {house && <img className="divPadre__contenedores--ind--img" src={"http://localhost:3000/"+house} alt="house"></img>}
                        </div>
                    {Object.entries(char).map(([key, value]) => {
                        if (key !== "id"&& key !== "name" && key !== "age" && key !== "image" && key !=="house") {
                            return (
                            <div className="divPadre__contenedores--ind" key={key}>
                                <h3 className="divPadre__contenedores--ind--key">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                <ul className="divPadre__contenedores--ind--list">
                                {value.map((item, index) => ( <li className="divPadre__contenedores--ind--list--value" key={item}>{item}</li> ))}
                                </ul>
                            </div>
                            );
                        }
                        return null;
                        })}
                </div>
            )}
        </div>
        </div>
        
    )
}