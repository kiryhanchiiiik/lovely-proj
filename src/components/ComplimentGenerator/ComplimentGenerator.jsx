import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import CardContent from "../CardContent/CardContent";
import { useNavigate } from "react-router-dom";
import css from "./ComplimentGenerator.module.css";

const compliments = [
  "Соняшник, ты — источник света и тепла в этом мире! ❤",
  "Твоя доброта и нежность способны растопить любое сердце! 🤍",
  "С тобой каждый момент наполняется гармонией и радостью! 💕",
  "Твоя энергия и улыбка делают этот мир ярче и теплее! 💋",
  "Ты как звезда, которая озаряет даже самые тёмные ночи! 💖",
  "В твоих глазах можно найти целые вселенные! 🌹",
  "Ты не просто красивая, ты — настоящий воплощённый идеал красоты и внутренней силы! 🥰",
  "Ты не просто умная, ты умеешь вдохновлять на великие дела. 😛",
  "Твоя улыбка — это лучшее лекарство от любого плохого настроения. 😻",
  "Ты — пример того, как можно сочетать доброту, ум и красоту в одном человеке. 😍",
];

const ComplimentGenerator = () => {
  const [compliment, setCompliment] = useState("Сонь, нажми на кнопку 😘");
  const [complimentIndex, setComplimentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showFinalButton, setShowFinalButton] = useState(false);
  const navigate = useNavigate();

  const generateCompliment = () => {
    if (complimentIndex < compliments.length - 1) {
      setCompliment(compliments[complimentIndex + 1]);
      setComplimentIndex(complimentIndex + 1);
    } else {
      setCompliment("Комплименты закончились!");
      setShowFinalButton(true);
      setFinished(true);
    }
  };

  const goToBestCompliment = () => {
    navigate("/best");
  };

  return (
    <div className={css.relative}>
      <img
        className={css.heart1}
        width="50"
        height="50"
        src="../../../public/heart.svg"
        alt=""
      />
      <img
        className={css.heart2}
        width="57"
        height="57"
        src="../../../public/heart-2.svg"
        alt=""
      />
      <img
        className={css.heart3}
        width="57"
        height="57"
        src="../../../public/heart-3.svg"
        alt=""
      />
      <img
        className={css.heart4}
        width="50"
        height="50"
        src="../../../public/heart-4.svg"
        alt=""
      />
      <Card>
        <CardContent>
          <p className="text-lg font-semibold text-gray-800">{compliment}</p>
        </CardContent>
      </Card>
      {!finished && (
        <Button onClick={generateCompliment}>Нажми сюда ❤</Button>
      )}
      {finished && showFinalButton && (
        <Button onClick={goToBestCompliment} className="mt-4">
          А теперь еще раз нажми))
        </Button>
      )}
    </div>
  );
};

export default ComplimentGenerator;
