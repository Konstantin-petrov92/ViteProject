import Header from "./conmponents/Header";
import WatToTeach from "./conmponents/WatToTeach";
import { ways } from "./data";

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <section>
          <h3>Как будет проходить диагностика</h3>
          <ul>
            <WatToTeach
              title={ways[0].title}
              description={ways[0].description}
            />

            <WatToTeach
              title={ways[1].title}
              description={ways[1].description}
            />

            <WatToTeach {...ways[2]} />

            <WatToTeach
              title={ways[3].title}
              description={ways[3].description}
            />
            <li>
              <p>
                <strong>JavaScript.</strong>Сделаем акцент на JavaScript,
                поскольку это важнейший инструмент разработчика. В соответствии
                с вашим опытом оценим теоретические знания языка и его
                особенности.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
