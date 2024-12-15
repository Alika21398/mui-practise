import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    email: "",
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
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
