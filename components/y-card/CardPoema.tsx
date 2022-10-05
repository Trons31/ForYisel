import { Avatar, Box, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

export const CardPoema = () => {
  return (
    <Box 
            display='flex'
            alignItems='center'
            justifyContent='center' 
            marginTop={10}
            padding='0px 10px'
            >
            
            <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                DR
              </Avatar>
            }
            title=""
            subheader="Martes 4, 2022"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Mi corazon se va de su sitio, se dsplaza a la derecha, de la clavicula en direccion al hombro se desliza por el brazo hasta la mano que lo cede al boligrafo. Desde alli se lanza al vacio de la hoja, arrastra sus pies por la pagina y se convierte en este poema que aseguran dos cosas:
            </Typography>

            <Typography variant="body2" color="text.secondary">
             - Que mirarte es el ovlido a la tristeza 
            </Typography>
            <Typography variant="body2" color="text.secondary">
             - Que escucharte es el cominenzo a la felicidad. 
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Es listo mi corazon, tiene buen gusto -como su dueño-, el tambien gusta de ti.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
          
        </Card>
       </Box>
  )
}
