import "./App.css";
import ImgOne from "./assets/img (3).png";
import ImgTwo from "./assets/img (2).png";
import ImgThree from "./assets/img (1).png";
import { Block } from "./components/Block";
import ImgFour from "./assets/original (2).jpg";
import ImgFive from "./assets/original (3).jpg";
import ImgSix from "./assets/original (7).jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="img-front">
          <h1>Minha primeira página com React</h1>
        </div>
        <div id="banner">
          <section>
            <img src={ImgOne} />
            <h3>Somente para desktops</h3>
          </section>
          <section>
            <img src={ImgTwo} />
            <h3>Criado com componentes</h3>
          </section>
          <section>
            <img src={ImgThree} />
            <h3>Fácil aproveitamento</h3>
          </section>
        </div>
      </header>
      <main>
        <Block img={ImgFour} />
        <Block invert img={ImgFive} />
        <Block img={ImgSix} />
      </main>
      <footer>
        <div id="img-front">
          <h1>Contato</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
