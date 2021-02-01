import { useEffect } from "react";
import "./Colors.css";

const Colors = ({ colorList, color, setColor, setIsGameOver }) => {
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

    const verifyAnswer = (color, array) => {
        if (color.result.name === array) {
            setIsGameOver(true);
        } else {
            console.log("vc perdeu");
        }
    };

    useEffect(() => {
        setColor(pickColor());
        console.log("color picking");
    }, []);
    const colorArray = makeColorArray(color);
    const randomArray = randomizeArray(colorArray);

    return (
        <div className="Colors">
            <div className="sum">
                <div className={"color " + color.color1.name}></div>
                <div className="plus">+</div>
                <div className={"color " + color.color2.name}></div>
            </div>
            <hr />
            {/* prettier-ignore */}
            <div className="results">
                <div onClick={() => {verifyAnswer(color ,randomArray[0])}} className={"color " + randomArray[0]}></div>
                <div onClick={() => {verifyAnswer(color ,randomArray[1])}} className={"color " + randomArray[1]}></div>
                <div onClick={() => {verifyAnswer(color ,randomArray[2])}} className={"color " + randomArray[2]}></div>
                <div onClick={() => {verifyAnswer(color ,randomArray[3])}} className={"color " + randomArray[3]}></div>
                <div onClick={() => {verifyAnswer(color ,randomArray[4])}} className={"color " + randomArray[4]}></div>
                <div onClick={() => {verifyAnswer(color ,randomArray[5])}} className={"color " + randomArray[5]}></div>
            </div>
        </div>
    );
};

export default Colors;
