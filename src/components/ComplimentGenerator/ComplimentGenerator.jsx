import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { compliments } from "../../../compliments";
import Button from "../Button/Button";
import Card from "../Card/Card";
import CardContent from "../CardContent/CardContent";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import css from "./ComplimentGenerator.module.css";

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
      <ImageWrapper css={css} />
      <Card>
        <CardContent>
          <p className="text-lg font-semibold text-gray-800">{compliment}</p>
        </CardContent>
      </Card>
      {!finished && <Button onClick={generateCompliment}>Нажми сюда ❤</Button>}
      {finished && showFinalButton && (
        <Button onClick={goToBestCompliment} className="mt-4">
          А теперь еще раз нажми))
        </Button>
      )}
    </div>
  );
};

export default ComplimentGenerator;
