import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import "./App.css";
//import MyMenu from "./components/mymenu/mymenu";

function App() {
  return (
    <>
      <main className="container">
        <Header />
        <Menu />
      </main>
    </>
  );
}

export default App;
