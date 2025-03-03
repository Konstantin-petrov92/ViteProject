import logo from "/logo-name.svg";
import { useEffect, useState } from "react"; //Импорт метода из Реакта
// import "./Header.css";
import { styled } from "styled-components"; //Библиотека которая позволяет добавлять стили к тегам в JS

// Теперь через ключевое слово styled мы можем задать стили тегам которые нам необходимы, и создавать отдельные компоненты
const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;
// const time = new Date(); //Статичные часы

//Динамические часы

export default function Header() {
  const [now, nowTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => nowTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // () => clearInterval(timer);

  //Реализация через useEffect
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nowTime(new Date());
  //   }, 1000);
  //   () => clearInterval(timer);
  // }, []);

  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt={"Logo"} />
      </div>
      <span>Время: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
