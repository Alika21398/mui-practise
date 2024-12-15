import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    email: "",
    course: "",
    terms: false,
  });

  const handleChange = (e) => {
    setInputs((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", inputs);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          value={inputs.name}
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
        />
        <br /> <br />
        <TextField
          variant="outlined"
          value={inputs.password}
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br /> <br />
        <TextField
          variant="outlined"
          value={inputs.email}
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <br /> <br />
        <FormControl fullWidth>
          <InputLabel>Courses</InputLabel>
          <Select
            label="courses"
            onChange={handleChange}
            value={inputs.course}
            name="course"
          >
            <MenuItem value="mongodb">MongoDb</MenuItem>
            <MenuItem value="express">Express</MenuItem>
            <MenuItem value="node">Node</MenuItem>
            <MenuItem value="rect">React</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <FormGroup>
          <FormControlLabel label="I agree T&C" control={<Checkbox onChange={()=> setInputs((preInput)=>({...preInput, terms: !inputs.terms}))} />} />
        </FormGroup>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
