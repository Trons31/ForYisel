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
import ReactAudioPlayer from 'react-audio-player';
import { truncate } from 'fs';
import Cita from '../components/cards/Cita';




const Home: NextPage = () => {

 


  const [open, setOpen] = useState(true);
  const [WordM, setWordM] = useState(false)

  const handleClickOpen = () => {

    setOpen(false);
    var colors = ['#bb0000', '#ffffff'];

        conffeti({
            zIndex: 999,
            particleCount: 500,
            spread: 160,
            angle: -100,
            origin: {
              x: 1,
              y: 0,
            },colors : colors
          })

          conffeti({
            zIndex: 999,
            particleCount: 500,
            spread: 160,
            angle: -100,
            origin: {
              x: 0,
              y: 0,
            },colors : colors
          })

  };

  const handleClose = () => {
    setOpen(false);
  };


  const theme = useTheme();

  return (
    
    <Layout>
      
    

    {
      open
      ?(
       <>
       
       <Box display='flex' alignItems='center' justifyContent='center' >
              <Typography  fontWeight={600} fontSize={18} >
                Bienvenida 
              </Typography>
              <Typography sx={{ color: '#ff9100' }} fontSize={25} >Yisel Aleman</Typography>
          </Box>

        <Box justifyContent='center' display='flex' >
              <Button onClick={handleClickOpen} variant='contained' sx={{ background: '#2196f3', color: 'white' }} >
                Frase de hoy
              </Button>
        </Box>

       </>
      )
      :(
        <>
            <Box 
          display='flex'
          mt={5}
          justifyContent='center' 
        >
                <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    DR
                  </Avatar>
                }
                title="Con cariño para ti"
                subheader="Lunes 10 de octubre"
              />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                 <strong>Hermosa señorita</strong> de <strong>ojos encantadores</strong>, bella dama de porte elegante, espero te guste.
                </Typography>

                <Typography mt={4} variant="body2" color="text.secondary">
                  Quiero verte, platicar, reirnos juntos, contarte las mil y un cosas que me han pasado. caminar a tu lado por la calle, comernos un helado, escribirte algo lindo en la servilleta y si estoy de suerte... detener el tiempo, seria ese mi lugar seguro.
                </Typography>
                      
                <Typography mt={4} variant="body2" color="text.secondary">
                 Sonrie haces que el mundo se vea mas bonito 
                </Typography>
              </CardContent>

            </Card>
        </Box>

        <Card sx={{ mt:5 }}>
          <Box sx={{ display: 'flex', }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="subtitle1">
                Esta es especial para ti.
              </Typography>
              </CardContent>
            </Box>
        </Card>

        <Box
        display='flex'
        justifyContent='center'
        mt={1}
        >
            <Card >
          <Box sx={{ display: 'flex', }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Con Cariño
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Tu admirador #1
                </Typography>
            </CardContent>
          
        
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image="/perfect.jpg"
            alt="Live from space album cover"
          />
        </Box>

          <Box sx={{ display: 'flex',ml:1,mt:1,mb:1  }}  padding='0px 1px' width='96%' >
                <ReactAudioPlayer
                  src="/perfect.mp3"
                  controls
                />
            </Box>

        </Card>
      </Box>

       <Cita />
       
        </>
      )
    }

    

    </Layout>
  

  )
}

export default Home
