import Card from "../Card/Card";
import "./Gallery.scss";
export default function Gallery({data, type}){

    // console.log(data);
    return(
        <div className="gallery">
            {data && data.map((item, index) => 
                <div key={index}>
                    <Card type={type} data={item}></Card>
                </div>
            )}
        </div>
    )
}