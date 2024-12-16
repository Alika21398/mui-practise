import "./App.css";

import Form from "./components/Form";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Modals from "./components/Modals";

function App() {
  return (
    <>
      <div>
       <Header/>
       <Cards/>
       <Modals/>
       
        <Form />
      </div>
    </>
  );
}

export default App;
