import { useEffect, useState } from "react";
import "./Message.css";

const Message = ({ color, isGameOver }) => {
    const [isFirstRun, setIsFirstRun] = useState(true);
    const [message, setMessage] = useState(
        "Oi, você consegue acertar o resultado da mistura das cores?"
    );

    useEffect(() => {
        if (isFirstRun) {
            setTimeout(() => {
                setMessage(
                    `A mistura das cores ${color.color1.name.toLowerCase()} e ${color.color2.name.toLowerCase()} resultam em qual cor?`
                );
                setIsFirstRun(false);
                console.log("A mistura das");
            }, 3000);
        } else {
            setMessage(
                `A mistura das cores ${color.color1.name.toLowerCase()} e ${color.color2.name.toLowerCase()} resultam em qual cor?`
            );
        }
    }, [color]);

    useEffect(() => {
        if (isGameOver) {
            setMessage(
                `Isso mesmo, a mistura das cores ${color.color1.name.toLowerCase()} e ${color.color2.name.toLowerCase()} resulta em ${color.result.name.toLowerCase()}.`
            );
        }
        console.log("gameover");
    }, [isGameOver]);

    return (
        <div
            style={{ backgroundImage: "url(/assets/imgs/speech-bubble.svg)" }}
            className="Message"
        >
            <p>{message}</p>
        </div>
    );
};

export default Message;
