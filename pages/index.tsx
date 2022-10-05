import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Typography, useTheme } from '@mui/material'
import type { NextPage } from 'next'
import conffeti from 'canvas-confetti';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useMemo, useState } from 'react';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardJuego } from '../components/y-card/CardJuego';


const Home: NextPage = () => {

   const [Message, setMessage] = useState(false);

   const heanledClick = () => {
    setMessage(true);
    
    var colors = ['#bb0000', '#ffffff'];
    conffeti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors
    });

   }

  const theme = useTheme();

  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    
    
    <Box>

     {
       
       Message
       ?(
            <CardJuego />
         )
         :(
          
          
        <Box 
        display='flex'
        alignItems='center'
        justifyContent='center' 
        marginTop={20}
        padding='0px 10px'
         >
         <Card sx={{ display: 'flex' }}>
           <Box sx={{ display: 'flex', flexDirection: 'column' }}>
             <CardContent sx={{ flex: '1 0 auto' }}>
               <Typography component="div" variant="h5">
                   Para ti
               </Typography>
               <Typography variant="subtitle1" color="text.secondary" component="div">
                Yisel Aleman
               </Typography>
             </CardContent>
             <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pr:1 }}>
               <Button  onClick={heanledClick} variant='contained' startIcon={<FavoriteIcon />} endIcon={ <FavoriteIcon />} className='btn-init' >
                 Haz Click
               </Button>
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
