import { Home } from "./pages/Home";
import "./assets/styles/fonts.css";
import { globalCss } from "./config/stitches.config";

const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "BarlowSemiBold",
      src: 'local("Barlow-SemiBold-600"), url("/src/assets/styles/fonts/Barlow-SemiBold-600.ttf") format("truetype")',
    },
    {
      fontFamily: "FrauncesBlack900",
      src: 'local("Fraunces-Black-900"), url("/src/assets/styles/fonts/Fraunces-Black-900.ttf") format("truetype")',
    },
    {
      fontFamily: "FrauncesBold700",
      src: 'local("Fraunces-Bold-700"), url("/src/assets/styles/fonts/Fraunces-Bold-700.ttf") format("truetype")',
    },
  ],
});

function App() {
  globalStyles();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
