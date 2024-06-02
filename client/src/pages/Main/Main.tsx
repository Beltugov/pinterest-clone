import React, {useEffect, useState} from "react";

import "./Main.scss";
import Masonry from "react-masonry-css";
import Card from "../../components/Card/Card";

interface pin {
    description: string,
    id: number,
    img: string
    show_title: false
    title: string
}

const Main = () => {
    const [pins, setPins] = useState<pin[] | null>(null)

    const FetchPins = async () => {
        const pins = await fetch("http://localhost:5000/api/pin").then((res) => res.json()).then((data) => data.data)
        setPins(pins)
    }
    useEffect(() => {
        FetchPins()
    }, [])
    
    return (
        <div className="main">
            <Masonry
                breakpointCols={{default: 6}}
                className="masonry"
                columnClassName="masonry__column"
            >{pins !== null && pins.map((item, index) => (
                <Card key={index} img={`http://localhost:5000/${item.img}`} title={item.title}/>
            ))}
            </Masonry>
        </div>
    );
};

export default Main;
