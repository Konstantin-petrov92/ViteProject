import Button from "./button/Button";

export default function TabSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button
        isActive={active === "main"} //Добавляется класс
        onClick={() => [onChange("main"), console.log("main")]} //Привязка ключевого слова main
      >
        Главная
      </Button>
      <Button
        isActive={active === "feetback"}
        onClick={() => [console.log("feetback"), onChange("feetback")]}
      >
        Обратная связь
      </Button>
      <Button
        isActive={active === "effect"}
        onClick={() => [console.log("effect"), onChange("effect")]}
      >
        Effect
      </Button>
    </section>
  );
}
