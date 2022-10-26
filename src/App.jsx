// Components
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

// Styles
import "./styles/reset.css";

const App = () => {

  return (
    <div className="App bg-secondary vh-100">
      <NavBar />
      <ItemListContainer greeting={"Mensaje desde prop"}/>
    </div>
  )
}

export default App
