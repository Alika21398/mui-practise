import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Avatar,
  IconButton,
  AvatarGroup,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

const Cards = () => {
  const [open, setOpen] = useState(false)

  console.log("open", open)
  return (
    <>
      <div>
        <Card
          sx={{ maxWidth: "300px", margin: "100px auto" }}
          variant="outlined"
        >
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: "skyblue" }}>R</Avatar>}
            action={<IconButton>k</IconButton>}
            title="Nepal"
            subheader="21 december"
          />
          <CardMedia
            component="img"
            height="140"
            image="https://tse3.mm.bing.net/th/id/OIP.7YK_sRTqodfNQ96q7T8F-QHaFj?rs=1&pid=ImgDetMain"
            alt="nepal"
          />
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              ut expedita! Odio nisi consequuntur architecto ipsum quaerat sit
              culpa cum?
            </Typography>
          </CardContent>
          <AvatarGroup sx={{ margin: "auto" }} max={5}>
            <Avatar
              alt="pic"
              src="https://tse3.mm.bing.net/th/id/OIP.l8Gq2tMTiFsD_rbHJcoY6QHaLO?rs=1&pid=ImgDetMain"
            />

            <Avatar
              alt="pic"
              src="https://tse3.mm.bing.net/th/id/OIP.l8Gq2tMTiFsD_rbHJcoY6QHaLO?rs=1&pid=ImgDetMain"
            />

            <Avatar
              alt="pic"
              src="https://tse3.mm.bing.net/th/id/OIP.l8Gq2tMTiFsD_rbHJcoY6QHaLO?rs=1&pid=ImgDetMain"
            />
            <Avatar
              alt="pic"
              src="https://tse3.mm.bing.net/th/id/OIP.l8Gq2tMTiFsD_rbHJcoY6QHaLO?rs=1&pid=ImgDetMain"
            />
            <Avatar
              alt="pic"
              src="https://tse3.mm.bing.net/th/id/OIP.l8Gq2tMTiFsD_rbHJcoY6QHaLO?rs=1&pid=ImgDetMain"
            />
            <Avatar
              alt="pic"
              src="https://tse3.mm.bing.net/th/id/OIP.l8Gq2tMTiFsD_rbHJcoY6QHaLO?rs=1&pid=ImgDetMain"
            />
          </AvatarGroup>
          <CardActions>
            <Button sx={{ margin: "auto" }} variant="contained">
              Share
            </Button>
            <Button sx={{ margin: "auto" }} variant="contained" onClick={()=>setOpen(true)}>
              Delete
            </Button>
          </CardActions>
        </Card>

        <Dialog open={open} onClose={()=>setOpen(false)}>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogContent>
            <DialogContentText>Close the box right now </DialogContentText>
          </DialogContent>
          <DialogActions>
            {" "}
            <Button onClick={()=>setOpen(true)}>Yes </Button>
            <Button onClick={()=>setOpen(false)}>No</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Cards;
