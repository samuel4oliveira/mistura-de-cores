import { useEffect, useState } from "react";
import "./Message.css";

const Message = ({ color, isGameOver }) => {
    const [message, setMessage] = useState(
        "Oi, você consegue acertar o resultado da mistura das cores?"
    );

    useEffect(() => {
        setTimeout(() => {
            setMessage(
                `A mistura das cores ${color.color1.name} e ${color.color2.name} resultam em qual cor?`
            );
            console.log("A mistura das");
        }, 3000);
    }, []);

    useEffect(() => {
        if (isGameOver) {
            setMessage(
                `Isso mesmo, a mistura das cores ${color.color1.name} e ${color.color2.name} resulta em ${color.result.name}.`
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
