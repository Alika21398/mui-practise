import { AppBar, Button, Card, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <AppBar sx={{ marginBottom: "70px" }}>
        <Toolbar>
          <Typography sx={{ fontSize: "30px" }}>Logo</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e,val)=>setValue(val)}
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Products" />
          </Tabs>
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto" }}
          >
            Sign In
          </Button>
          
        </Toolbar>
      </AppBar>
      
    </>
  );
};

export default Header;
