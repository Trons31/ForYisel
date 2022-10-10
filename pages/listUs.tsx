import { List, ListItem, Checkbox, ListItemButton, ListItemText, Typography, Divider, Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material"
import { red } from "@mui/material/colors";
import { useState } from "react";
import { Layout } from "../components/Layouts"
import FavoriteIcon from '@mui/icons-material/Favorite';


const listUs = () => {

    

  return (
   <Layout>

    <Typography fontWeight={600} > Lista de planes  </Typography>
        <List  dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt: 5 }}>
     
          <ListItem
            secondaryAction={
              <Checkbox
                edge="end"
               
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText  primary={"Tener una cita "} />
            </ListItemButton>
          </ListItem>
          <ListItem
            secondaryAction={
              <Checkbox
                edge="end"
               
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText  primary={"Ver peliculas"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            secondaryAction={
              <Checkbox
                edge="end"
               
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText  primary={"Ver your name"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            secondaryAction={
              <Checkbox
                edge="end"
               
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText  primary={"Ver el tiempo contigo"} />
            </ListItemButton>
          </ListItem>
          <Divider> Importante </Divider>
          <ListItem
            secondaryAction={
              <Checkbox
                edge="end"
               
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText  primary={"Ir a cine"} />
            </ListItemButton>
          </ListItem>
          <Divider> Importante </Divider>
        
    </List>



  <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           DR
          </Avatar>
        }
       
        title="Cita"
        subheader="29-30 de octubre"
      />
      <CardMedia
        component="img"
        height="194"
        image="/love.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           Yise, si pudieras ver como se acelera mi corazon por ti, sabrias que el amor no es solo decrilo si no tambien sentirlo.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
     
    </Card>

   </Layout>
  )
}

export default listUs