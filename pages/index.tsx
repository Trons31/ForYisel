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



const Home: NextPage = () => {

 


  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {

    setOpen(false);
    var colors = ['#bb0000', '#ffffff'];

        conffeti({
            zIndex: 999,
            particleCount: 1000,
            spread: 160,
            angle: -100,
            origin: {
              x: 1,
              y: 0,
            },colors : colors
          })

          conffeti({
            zIndex: 999,
            particleCount: 1000,
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
                subheader="Domingo 9 de octubre"
              />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                 <strong>Hermosa señorita</strong> de <strong>ojos encantadores</strong> me permitiria pedirle amablamente y con todo el respeto que lea este lindo mensaje.
                </Typography>

                <Typography mt={5} variant="body2" color="text.secondary">
                - Nunca pierdas la alegria de vivir, de compartir, de amar y de ser feliz, levanta  la mirada y confia en que todo saldra bien, y por si lo olvidas aqui estare para recordarte que al final todo estara bien.
                </Typography>
                <Typography mt={2} variant="body2" color="text.secondary">
                 - Sabes tu sonrisa solo demora unos segundos o tal vez minutos, pero su efecto a durado toda mi vida.
                </Typography>
              </CardContent>

            </Card>
        </Box>

        <Box
        display='flex'
        justifyContent='center'
        mt={5}
        >
            <Card >
          <Box sx={{ display: 'flex', }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Mi heart
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Tu admirador #1
              </Typography>
            </CardContent>
          
        
          <CardMedia
            component="img"
            sx={{ width: 120 }}
            image="/love.jpg"
            alt="Live from space album cover"
          />
        </Box>

          <Box sx={{ display: 'flex',ml:1,mt:1,mb:1  }}  padding='0px 1px' width='96%' >
                <ReactAudioPlayer
                  src="/just.mp3"
                  controls
                />
            </Box>

        </Card>
      </Box>

        <Button sx={{ mt:2 }}>
            Ver letra
        </Button>
        </>
      )
    }

    </Layout>
  

  )
}

export default Home
