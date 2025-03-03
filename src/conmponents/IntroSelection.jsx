import React from "react";
// export default function IntroSelection() {
//   return (
//     <section>
//       <h1 className="centered">Result University</h1>
//       <h3 className="centered" style={{ color: "#666" }}>
//         Университет frontend-разработки, который насыщает IT-сферу
//         квалифицироваными программистами
//       </h3>
//     </section>
//   );
// }

//Аналогичная запись, написанная именно на React
export default function IntroSelection() {
  //React.createElement("#", "#", "#") - Данный метод добавляет элементы и принимает три параметра. 1. Наименование элемента (тега), 2. опции передаваемые в тег, 3. Какие "дети" будут у данного тега
  return React.createElement("section", null, [
    React.createElement(
      "h1",
      { className: "centered", key: 1 },
      "Result University"
    ),
    React.createElement(
      "h1",
      { className: "centered", style: { color: "#666" }, key: 2 },
      "Университет frontend-разработки, который насыщает IT-сферу квалифицироваными программистами"
    ),
  ]);
}
