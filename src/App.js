import React, { useState } from "react";
import { colorList } from "./data.js";
import Message from "./Message.js";
import MainImage from "./MainImage.js";
import Colors from "./Colors.js";
import Confetti from "./Confetti.js";
import "./App.css";

function App() {
    const [color, setColor] = useState(colorList[0]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [reset, setReset] = useState(false);

    return (
        <div className="App">
            <Message color={color} isGameOver={isGameOver} reset={reset} />
            <MainImage />
            <Colors
                colorList={colorList}
                color={color}
                setColor={setColor}
                setIsGameOver={setIsGameOver}
                reset={reset}
                setReset={setReset}
            />
            <Confetti isGameOver={isGameOver} reset={reset} />
        </div>
    );
}

export default App;
