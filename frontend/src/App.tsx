import { Routes } from "./routes/index.routes";
import { NavBar, Footer } from "./components/layouts/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
