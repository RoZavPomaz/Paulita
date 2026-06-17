import "./App.css";
import heroFull from "./assets/images/HeroFull.png";

import { Page1 } from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { Page4 } from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";

function App() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroFull})` }}
    >
      {/* Capa oscura con opacidad */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenido */}
      <div className="relative z-10">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
      </div>
    </main>
  );
}

export default App;
