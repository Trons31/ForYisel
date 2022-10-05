import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography, useTheme } from '@mui/material'
import type { NextPage } from 'next'
import conffeti from 'canvas-confetti';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useState } from 'react';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Home: NextPage = () => {

   const [Message, setMessage] = useState(false);

   const heanledClick = () => {
    setMessage(true);
    var end = Date.now() + (5 * 1000);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];
    
    (function frame() {
      conffeti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      conffeti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
   }

  const theme = useTheme();
  return (
    
    
    <Box>

     {
       
       Message
       ?(
            <Box 
            display='flex'
            alignItems='center'
            justifyContent='center' 
            marginTop={50}
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
         :(
          
          
        <Box 
        display='flex'
        alignItems='center'
        justifyContent='center' 
        marginTop={50}
        padding='0px 10px'
         >
         <Card sx={{ display: 'flex' }}>
           <Box sx={{ display: 'flex', flexDirection: 'column' }}>
             <CardContent sx={{ flex: '1 0 auto' }}>
               <Typography component="div" variant="h5">
                  Para Ti
               </Typography>
               <Typography variant="subtitle1" color="text.secondary" component="div">
                Daniel Rivero
               </Typography>
             </CardContent>
             <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
               <IconButton aria-label="previous">
                 {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
               </IconButton>
               <IconButton onClick={heanledClick} aria-label="play/pause">
                 <PlayArrowIcon sx={{ height: 38, width: 38 }} />
               </IconButton>
               <IconButton aria-label="next">
                 {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
               </IconButton>
             </Box>
           </Box>
           <CardMedia
             component="img"
             sx={{ width: 151 }}
             image="/love.jpg"
             alt="Live from space album cover"
           />
         </Card>
         </Box>
           
        )
           
      }

    </Box>

  )
}

export default Home
