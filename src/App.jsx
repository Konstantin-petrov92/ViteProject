import Header from "./conmponents/Header/Header";
import TeachingSection from "./conmponents/ComponentsTichengSection";
import AddButton from "./conmponents/AddButton";
import IntroSelection from "./conmponents/IntroSelection";
import TabSection from "./conmponents/TabSection";
import FeedBackSection from "./conmponents/FeedBackSection";
import { useState } from "react";
import EffectSection from "./conmponents/EffectSection";

//Для того, что бы можно было обходиться без div который оборарчивает всю конструкцию (т.к. ретёрнить можно только один элемент) используем подключение Fragment, который позвоняет возвращать все элементы без потерь
// import { Fragment } from "react";
//Однако можно воспользоваться движком React, который позволяет нам просто обойтись открывающися и закрывающимся тегом (<></>)

export default function App() {
  const [tab, setTab] = useState("effect");
  // const stateArray = useState(); //useState() (и прочие хуки (hook) можно использовать только на вернем уровне компонента (сразу после App))

  //При помощи диструктуризации мы может обращаться ко второму параметру State (которое по умолчанию есть)

  return (
    <>
      <Header />

      <main>
        <IntroSelection />

        <TabSection active={tab} onChange={(current) => setTab(current)} />

        {tab == "main" && (
          <>
            <TeachingSection />
            <AddButton />
          </>
        )}

        {tab == "feetback" && <FeedBackSection />}
        {tab == "effect" && <EffectSection />}
      </main>
    </>
  );
}
