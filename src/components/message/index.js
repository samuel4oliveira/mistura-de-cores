import { useEffect } from "react";
import "./message.css";

const Message = ({ color, isGameOver, message, setMessage }) => {
    useEffect(() => {
        if (isGameOver) {
            setMessage(
                `Isso mesmo, a mistura das cores ${color.color1.name.toLowerCase()} e ${color.color2.name.toLowerCase()} resulta em ${color.result.name.toLowerCase()}.`
            );
        }
    }, [isGameOver]);

    return (
        <div style={{ backgroundImage: "url(/assets/imgs/speech-bubble.svg)" }} className="Message">
            <p>{message}</p>
        </div>
    );
};

export default Message;
