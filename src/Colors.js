import "./Colors.css";

const Colors = ({ color, colorsArray, setIsGameOver }) => {
    const verifyAnswer = (color, answer) => {
        if (color.result.name === answer) {
            setIsGameOver(true);
        } else {
            console.log("vc perdeu");
        }
    };

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
                <div onClick={() => {verifyAnswer(color ,colorsArray[0])}} className={"color " + colorsArray[0]}></div>
                <div onClick={() => {verifyAnswer(color ,colorsArray[1])}} className={"color " + colorsArray[1]}></div>
                <div onClick={() => {verifyAnswer(color ,colorsArray[2])}} className={"color " + colorsArray[2]}></div>
                <div onClick={() => {verifyAnswer(color ,colorsArray[3])}} className={"color " + colorsArray[3]}></div>
                <div onClick={() => {verifyAnswer(color ,colorsArray[4])}} className={"color " + colorsArray[4]}></div>
                <div onClick={() => {verifyAnswer(color ,colorsArray[5])}} className={"color " + colorsArray[5]}></div>
            </div>
        </div>
    );
};

export default Colors;
