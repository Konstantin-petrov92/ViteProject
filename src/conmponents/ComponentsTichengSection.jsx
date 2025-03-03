import { ways } from "../data";
import WatToTeach from "./WatToTeach";

export default function TeachingSection() {
  return (
    <section>
      <h3>Как будет проходить диагностика</h3>
      <ul>
        {/* //  Альтернативный вариант добавления элементов  */}
        {ways.map((way) => (
          <WatToTeach key={way.title} {...way} />
        ))}
        {/* <WatToTeach
            title={ways[0].title}
            description={ways[0].description}
          />

          <WatToTeach
            title={ways[1].title}
            description={ways[1].description}
          />

          <WatToTeach {...ways[2]} />

          <WatToTeach {...ways[3]} />
          <li>
            <p>
              <strong>JavaScript.</strong>Сделаем акцент на JavaScript,
              поскольку это важнейший инструмент разработчика. В соответствии
              с вашим опытом оценим теоретические знания языка и его
              особенности.
            </p>
          </li> */}
      </ul>
    </section>
  );
}
