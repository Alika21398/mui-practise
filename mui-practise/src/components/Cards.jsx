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
} from "@mui/material";
import React from "react";

const Cards = () => {
  return (
    <>
      <Card sx={{ maxWidth: "300px" }} variant="outlined">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut
            expedita! Odio nisi consequuntur architecto ipsum quaerat sit culpa
            cum?
          </Typography>
        </CardContent>
        <AvatarGroup max={5}>
         
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
          <Button variant="contained">Share</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Cards;
