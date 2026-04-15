import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";


function App() {
  return (
    <>
    <MsgBox userName="nivedika" textColor="red" />
    <MsgBox userName="priya" textColor="blue" />
    <MsgBox userName="Aaisha" textColor="green" />
    <ProductTab />
    </>
  );
}

export default App;
