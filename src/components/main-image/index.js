import { useEffect, useState } from "react";
import "./main-image.css";

const MainImage = () => {
    const [image, setImage] = useState("./assets/imgs/girl.svg");

    const blink = async () => {
        setImage("./assets/imgs/girl-blink.svg");
        await new Promise((resolve) => setTimeout(resolve, 200));
        setImage("./assets/imgs/girl.svg");
    };

    useEffect(() => {
        setInterval(() => {
            blink();
        }, 4000);
    }, []);

    return <img className="MainImage" src={image} alt="little kid" />;
};

export default MainImage;
