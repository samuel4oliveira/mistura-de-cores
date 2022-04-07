import { useEffect, useState } from "react";
import style from "./Character.module.css";
import Image from "next/image";

const eyesClosedSrc = "/assets/imgs/girl-blink.svg";
const eyesOpenSrc = "/assets/imgs/girl.svg";

const Character = () => {
  const [imgSrc, setImageSrc] = useState(eyesOpenSrc);

  const onBlink = async () => {
    setImageSrc(eyesClosedSrc);
    console.log("aaa");
    await new Promise((resolve) => setTimeout(resolve, 200));
    setImageSrc(eyesOpenSrc);
    console.log("bbb");
  };

  useEffect(() => {
    setInterval(() => {
      onBlink();
    }, 6000);
  }, []);

  return (
    <div className={style.character}>
      <Image
        objectFit="cover"
        quality={100}
        layout="fill"
        src={imgSrc}
        priority
      />
    </div>
  );
};

export default Character;
