import { Home } from "@/pages/Home";
import { globalStyles } from "@/assets/styles/globalStyles";
function App() {
  globalStyles();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
