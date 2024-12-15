import "./App.css";
import { Typography, Button } from "@mui/material";
import Form from "./components/Form";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div>
       <Header/>
       <Cards/>
       
       
        <Form />
      </div>
    </>
  );
}

export default App;
