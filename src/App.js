import { useEffect, useState } from "react";
import { colorList } from "./data.js";
import Message from "./Message.js";
import MainImage from "./MainImage.js";
import Colors from "./Colors.js";
import "./App.css";

function App() {
    const pickColor = () => {
        const id = Math.floor(Math.random() * 10) + 1;
        const color = colorList.find((color) => parseInt(color.id) === id);
        return color;
    };

    const makeColorArray = (firstColor) => {
        let colorArray = [];
        colorArray.push(firstColor.result.name);
        while (colorArray.length < 6) {
            let color = pickColor().result.name;
            if (!colorArray.includes(color)) {
                colorArray.push(color);
            }
        }
        return colorArray;
    };

    const randomizeArray = (array) => {
        let randomArray = [];
        while (randomArray.length < 6) {
            let index = Math.floor(Math.random() * 6);
            if (!randomArray.includes(array[index])) {
                randomArray.push(array[index]);
            }
        }
        return randomArray;
    };

    const [color, setColor] = useState(() => pickColor());
    const [colorArray, setColorArray] = useState(() => makeColorArray(color));
    const [randomColors, setRandomColors] = useState(() =>
        randomizeArray(colorArray)
    );
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        if (isGameOver) {
            setTimeout(() => {
                setColor(() => pickColor());
                setColorArray(() => makeColorArray(color));
                setRandomColors(() => randomizeArray(colorArray));
                setIsGameOver(false);
                console.log("U jogo acabou");
            }, 4000);
        }
    }, [isGameOver]);

    return (
        <div className="App">
            <Message color={color} isGameOver={isGameOver} />
            <MainImage />
            <Colors
                color={color}
                colorsArray={randomColors}
                setIsGameOver={setIsGameOver}
            />
        </div>
    );
}

export default App;
