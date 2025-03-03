import classes from "./Button.module.css";
//Добавление .module используется для изоляции классов.

//children - специальное свойство которое принимает значение указанное в поле тега

//Все обработчики событий в JS начинаются с "on"

//Что бы функция handleClick работала в момент клика писать скобки "()" не нужно, в противном случае функция отработает один раз

//Добавить функцию можно 3-мя способами через вставку готовой функции, либо прописать функцию внутри

//*Второй параметр определяет событие которое бутед прописано.

export default function Button({ children, isActive, ...props }) {
  // console.log("Обновление кнопок");
  // function handleClick() {
  //   console.log("i'm Button");
  // }
  // const handleMouseEnter = () => {
  //   console.log("Entered");
  // };

  return (
    <button
      //Принимает все дополнительные объекты
      {...props}
      //Проверка на активность кнопки
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      } //Данным способом была выполнена изоляция стилизации кнопок
      // onMouseEnter={handleMouseEnter}
      // onDoubleClick={() => console.log("dbl")}
    >
      {children}
    </button>
  );
}
