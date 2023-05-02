import './HouseDetailPage.scss'
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom/dist";
import Header from '../../components/Header/Header';

export default function HouseDetailPage(){
    const {id} = useParams();
    const [house, setHouse] = useState([]);

    

    
    useEffect(() => {
        axios.get(`http://localhost:3000/houses/${id}`).then(res => {
            setHouse(res.data);
            console.log(res.data);
        })
    }, [])

    return(
        <div className="main">
            <Header></Header>
            <div className="divPadre">
            {house && (
                <div className="divPadre__personaje">
                    <img className="divPadre__personaje--img" src={"http://localhost:3000/" + house.image}></img>
                    <h2 className="divPadre__personaje--name">{house.name}</h2>
                </div>
            )}
            <div className="divPadre__contenedores">
                {house && Object.entries(house).map(([key, value]) => {
                    if (key !== "id" && key !== "name" && key !== "image") {
                        return (
                            <div className="divPadre__contenedores--ind" key={key}>
                                <h3 className="divPadre__contenedores--ind--key">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                <ul className="divPadre__contenedores--ind--list"> 
                                    {Array.isArray(value) ? value.map((item, index) => ( <li className="divPadre__contenedores--ind--list--value" key={item}>{item}</li> )) : <li className="divPadre__contenedores--ind--list--value">{value}</li>}
                                </ul>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
        </div>
        
    )
}