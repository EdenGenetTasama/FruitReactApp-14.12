import logo from "./logo.svg";
import "./App.css";
import Logo from "./component/Logo/logo";
import VegetationAdd from "./component/Vegetation/vegetation";
import AddCanned from "./component/Canned_Food/canned_food";
import Fruit from "./component/Fruit/fruit";
import Vegetable from "./component/Vegetation/vegetation";

function App() {
  return (
    <div className="App">
      <Logo />
      <Vegetable />
      <Fruit />
      <AddCanned />
    </div>
  );
}

export default App;
