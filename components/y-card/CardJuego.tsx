import { Box, Card, CardHeader, Avatar, CardContent, Typography, CardActions, IconButton, Divider, Button } from "@mui/material"
import { red } from "@mui/material/colors"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import conffeti from 'canvas-confetti';

export const CardJuego = () => {

    const [Message1, setMessage1] = useState(false);

    const [Message2, setMessage2] = useState(true);

    const [Message3, setMessage3] = useState(false);

    const heamdLeClick = () => {
       setMessage1(false)
       setMessage3(true)
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

    const heandleClick2 = () =>{
           setMessage1(true)
            setMessage2(false)
        var colors = ['#bb0000', '#ffffff'];

        conffeti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
              x: 1,
              y: 0,
            },colors : colors
          })

          conffeti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
              x: 0,
              y: 0,
            },colors : colors
          })
    }
    
  return (
      <>
      
       {
        Message1 &&
        (
           
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
            <Typography mb={2} variant="body2" color="text.secondary">
              Es por ello que ello echo este pequeño algoritmo que todos los dias te dejara un lindo mensaje
            </Typography>
            <Divider />
            <Typography mt={2} variant="body2" color="text.secondary">
             Justo despues de hacer click en el boton encontraras el de hoy.
            </Typography>
          </CardContent>
          
          <Button onClick={  heamdLeClick}  fullWidth  variant='contained' startIcon={<FavoriteIcon />} endIcon={ <FavoriteIcon />} className='btn-init' >
            ver mensaje
          </Button>
        </Card>
        </Box>

        )
       }

       {
        Message2 &&
        (
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
            <Typography mb={2} variant="body2" color="text.secondary">
                Hola yisee, oye se que tal vez esto no es la gran cosa pero,<strong>  quize tener un lindo gesto contigo en lo que soy bueno.</strong>
            </Typography>
            <Divider />
            <Typography  mt={2} variant="body2" color="text.secondary">
                <strong>Eres importante para mi</strong>, entonces quiero por lo menos hacertelo saber.
            </Typography>
            
          </CardContent>
          
          <Button onClick={
          heandleClick2 
        } fullWidth  variant='contained' startIcon={<FavoriteIcon />} endIcon={ <FavoriteIcon />} className='btn-init' >
            continuar
          </Button>
        </Card>
        </Box>
        )
       }

       {
        Message3  && 
        (
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
               Yise sin duda eres una persona muy especial, lo entendi a penas nos conocimos supe que era imposible encontrar a alguien mas como tu, con esas ganas de hacer siempre lo correcto y de compartir con otros un poco de tu felicidad.

            </Typography>

            <Typography variant="body2" color="text.secondary">
             - A lo largo de la vida he querido rebobinar demasiadas cosas y no lo consegui nunca, es imposible, ya no le pido un boton de rebobinar al mundo, es mas sencillo, poder estar contigo, si fueras el tiempo serias el instante del que nunca me iria.
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

      </>
  )
}
