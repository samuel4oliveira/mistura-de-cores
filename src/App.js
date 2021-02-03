import { useEffect, useState } from "react";
import { colorList } from "./data.js";
import Message from "./Message.js";
import MainImage from "./MainImage.js";
import Colors from "./Colors.js";
import Confetti from "./Confetti.js";
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

    function reset() {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 4000);
        })
            .then(() => {
                setColor(() => pickColor());
            })
            .then(() => {
                setColorArray(() => makeColorArray(color));
            })
            .then(() => {
                setRandomColors(() => randomizeArray(colorArray));
            })
            .then(() => {
                setIsGameOver(false);
            });
    }

    const [color, setColor] = useState(() => pickColor());
    const [colorArray, setColorArray] = useState(() => makeColorArray(color));
    const [randomColors, setRandomColors] = useState(() =>
        randomizeArray(colorArray)
    );
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        if (isGameOver) {
            reset();
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
            {isGameOver ? <Confetti /> : <></>}
        </div>
    );
}

export default App;
