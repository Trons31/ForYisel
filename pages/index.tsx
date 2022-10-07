import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, Link, Typography, useTheme } from '@mui/material'
import type { NextPage } from 'next'
import conffeti from 'canvas-confetti';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useMemo, useState } from 'react';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NextLink  from 'next/link';

import { Layout } from '../components/Layouts';
import { CardJuego } from '../components/cards';



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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    
    <Layout>
      
      <Box>

{
  
  Message
  ?(
       <CardJuego />
    )
    :(
     
      <>

      <Typography fontWeight={600} fontSize={25} > Lista ! </Typography>

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
            subheader="Jueves 6, 2022"
          />
          <CardContent>
            <Typography mb={2} variant="body2" color="text.secondary">
              Hola yise, bueno acontinuacion veraz lo que tengo para ti, espero que te guste y que me prometas que lo consideraras, por favor dame un respuesta.
            </Typography>
            <Divider />
            <Typography mt={2} variant="body2" color="text.secondary">
              Bueno no me queda mas que decir que puedes empezar
            </Typography>
          </CardContent>
          
          {/* <Button onClick={  heanledClick }  fullWidth  variant='contained' startIcon={<FavoriteIcon />} endIcon={ <FavoriteIcon />} className='btn-init' >
            ver mensaje
          </Button>  */}

      <Button  fullWidth  variant='contained' className='btn-init' onClick={handleClickOpen}>
       Empezar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Terminos y Condiciones"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ok acontinuacion podras ver lo que he preparado para ti, pero, antes debes aceptar mis terminos y condiciones, son simples, dame la oportunidad.
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        <NextLink href='/cita'  > 
            <Link>
            <Button   fullWidth  variant='contained'  className='btn-init' >
            Acepto
            </Button> 
            </Link>
        </NextLink>

        </DialogActions>
      </Dialog>

        </Card>
        </Box>
      
      </>
      
     
      
    )
      
 }

</Box>

    </Layout>
  

  )
}

export default Home
