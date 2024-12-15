import "./App.css";
import { Typography, Button } from "@mui/material";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div>
       
        <Typography variant="h2" sx={{color:"red"}}>Form Starts</Typography>
        <Form />
      </div>
    </>
  );
}

export default App;
