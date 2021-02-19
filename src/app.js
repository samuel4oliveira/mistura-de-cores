import MainButton from "./components/main-button";
import MainImage from "./components/main-image";
import Confetti from "./components/confetti";
import { useEffect, useState } from "react";
import Message from "./components/message";
import Colors from "./components/colors";
import { colorList } from "./data.js";
import "./app.css";

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
    const [randomColors, setRandomColors] = useState(() => randomizeArray(colorArray));
    const [isGameOver, setIsGameOver] = useState(false);
    const [newGame, setNewGame] = useState(false);
    const [message, setMessage] = useState("Oi, você consegue acertar o resultado da mistura das cores?");

    useEffect(() => {
        if (newGame) {
            setColor(() => pickColor());
            setNewGame(false);
        }
    }, [isGameOver]);

    useEffect(() => {
        setColorArray(() => makeColorArray(color));
    }, [color]);

    useEffect(() => {
        setRandomColors(() => randomizeArray(colorArray));
    }, [colorArray]);

    return (
        <div className="App">
            <Message color={color} isGameOver={isGameOver} message={message} setMessage={setMessage} />
            <MainImage />
            <div className="Colors">
                <Colors
                    color={color}
                    colorsArray={randomColors}
                    setIsGameOver={setIsGameOver}
                    setMessage={setMessage}
                />
                <MainButton
                    color={color}
                    setMessage={setMessage}
                    isGameOver={isGameOver}
                    setNewGame={setNewGame}
                    setIsGameOver={setIsGameOver}
                />
            </div>
            {isGameOver ? <Confetti /> : <></>}
        </div>
    );
}

export default App;
