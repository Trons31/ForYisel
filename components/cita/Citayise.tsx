import { Alert, Avatar, Box, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Link, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import conffeti from 'canvas-confetti';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import NextLink  from 'next/link';


export const CitaYise = () => {

    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [Message1, setMessage1] = useState(true);

    const [Message2, setMessage2] = useState(false);

    const heamdLeClick = () => {
        setMessage1(false)
        setMessage2(true)
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

  return (

    <>
    
    <Alert severity="warning">Ok para que todo salga de manera correcta solo podras decir que si, si quieres puedes intentar decir no, bueno si puedes.</Alert>

      {

       Message1
       ?(
        <>
        
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
              He intentado escribir ciertas cosas y sigo buscando las palabras que describan lo que siento , y es que 
            </Typography>
            <Typography mb={2} variant="body2" color="text.secondary">
             me hes imposible articular todo lo que pienso  y como explicar que muero cada dia por las ganas de verte.
            </Typography>
            <Divider />
            <Typography  mt={2} variant="body2" color="text.secondary">
                <strong>Esto es importante para mi</strong>, Por ultimo disculpa por la tardanza
            </Typography>
            
          </CardContent>
          
          <Button onClick={
          heamdLeClick
         } fullWidth  variant='contained' startIcon={<FavoriteIcon />} endIcon={ <FavoriteIcon />} className='btn-init' >
            Ver sorpresa
          </Button>
          
        </Card>
        </Box>
        </>
       )
       :(
        ""
       )

      }

       {

       Message2
       ?(
        <>
         
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
            subheader="Al fin jeje"
          />
          <CardContent>
            <Typography mb={2} variant="body2" color="text.secondary">
               Ok señorita ya llevamos tiempo hablando y la verdad todo este tiempo ha sido espectacular para mi, hablar contigo es mi momento favorito del dia, es por ello que
            </Typography>
            <Divider />
            <Typography  mt={2}  variant="body2" color="text.secondary">
                Me consederias el placer y el honor de salir contigo, tener un cita, te prometo que sera la mejor cita que habras tenido en toda tu vida.<strong> aparte tenemos muchas cosas por hacer y que hablar, por favor </strong>
            </Typography>
            
            <Typography mb={2} variant="body2" > Aqui te dejo las siguentes fechas </Typography>

            <Divider>29-octubre</Divider>
            <Divider>30-octubre</Divider>

          </CardContent>
       

         <Box display='flex' padding={2} >

     <Button    variant='contained' className='btn-init' onClick={handleClickOpen}>
       No acepto
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
           Losiento pero Daniel me programo para que no aceptara un no!.
          </DialogContentText>
        </DialogContent>
        <DialogActions>

     
            <Button onClick={() => setOpen(false)}   fullWidth  variant='contained'  className='btn-init' >
           Cerrar
            </Button> 

        </DialogActions>
      </Dialog>  
          
          <Box flex={1} />

          <NextLink href='/listUs'  > 
            <Link>
            <Button   variant='contained'  className='btn-init' >
            Acepto
            </Button> 
            </Link>
        </NextLink>

         </Box>
          
        </Card>
        </Box>
        

        </>
       )
       :(
         ""
       )

       }

    </>

  )
}
