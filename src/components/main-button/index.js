import { useEffect, useState } from "react";
import "./main-button.css";

const MainButton = ({ color, setMessage, isGameOver, setNewGame, setIsGameOver }) => {
    const [isFirstRun, setIsFirstRun] = useState(true);
    const buttonClicked = () => {
        if (isGameOver) {
            setIsGameOver(false);
            setNewGame(true);
            setIsFirstRun(false);
        } else {
            setMessage(
                `A mistura das cores ${color.color1.name.toLowerCase()} e ${color.color2.name.toLowerCase()} resultam em qual cor?`
            );
        }
    };

    useEffect(() => {
        if (!isFirstRun) {
            setMessage(
                `A mistura das cores ${color.color1.name.toLowerCase()} e ${color.color2.name.toLowerCase()} resultam em qual cor?`
            );
        }
    }, [color]);

    return (
        <div className="MainButton">
            <button onClick={buttonClicked}>Próximo</button>
        </div>
    );
};

export default MainButton;
