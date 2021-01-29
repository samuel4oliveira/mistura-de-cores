import React from "react";
import { colorList } from "./data.js";
import Message from "./Message.js";
import MainImage from "./MainImage.js";
import Colors from "./Colors.js";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Message />
            <MainImage />
            <Colors colorList={colorList} />
        </div>
    );
}

export default App;
