import { useState, useRef } from "react"; //useRef также взаимодействует со страницей, но не выполняет рендеринг
import Button from "./button/Button";

//Для дебажа убрать ошибку до определения значения {input.current.value} vможно поставить знак вопрорса {input.current?.value}
function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default function FeedBackSection() {
  //Что бы не дублированить useState воспользуемся записью сгрупировав все в один объект
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  // const [name, setName] = useState("");
  // const [reason, setReason] = useState("hepl");
  // const [hasError, setHasError] = useState(false);

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  // function handleNameChange(event) {
  //   setName(event.target.value);
  //   setHasError(event.target.value.trim().length === 0);
  // }

  // function toggleError() {
  //   // setHasError((prev) => !prev);
  //   // setHasError((prev) => !prev);
  // }

  return (
    <section>
      <h3>Обратная связь</h3>
      {/* <Button onClick={toggleError}>Toggle error</Button> */}
      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          //Аналог написанию функции
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        {/* <pre>
          {JSON.stringify(form, null, 2)}
          Name: {form.name}
          <br />
          Reason: {form.reason}
        </pre> */}

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
      <StateVsRef></StateVsRef>
    </section>
  );
}
