import React, { useState } from 'react'
import { Layout } from '../components/Layouts'
import conffeti from 'canvas-confetti';
import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CitaYise } from '../components/cita';



const citaPage = () => {

    const [Message1, setMessage1] = useState(false);

    const [Message2, setMessage2] = useState(true);

    const [Message3, setMessage3] = useState(false);

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
     <Layout>
        
        {
            Message2
            ?(
              <>
              <Box justifyContent='center' alignItems='center' display='flex' >
            <Typography fontWeight={600} fontSize={30} > Bienvenida </Typography>
        </Box>

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
            subheader="Frase de hoy"
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
          
          <Button onClick={  heandleClick2}  fullWidth  variant='contained' startIcon={<FavoriteIcon />} endIcon={ <FavoriteIcon />} className='btn-init' >
           Continuar
          </Button>
        </Card>
        </Box>
              </>
            )
            :(
             <Typography></Typography>
            )
        }

        {
           Message1 
           ?(
            <CitaYise />
           )
           :(
            <Typography></Typography>
           )
        }


     </Layout>
  )
}

export default citaPage