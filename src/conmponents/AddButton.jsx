import Button from "./button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function AddButton() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    // console.log(differences);
    console.log(contentType); //**Работать с контентом можно только после того как произойдет рендер
    setContentType(type);

    // content = type;
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Концетрация
      </Button>
      {contentType ? (
        <p>{differences[contentType]}</p>
      ) : (
        <p>"Нажми на кнопку"</p>
      )}
    </section>
  );
}
