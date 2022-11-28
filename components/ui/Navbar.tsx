import { AppBar, Box, IconButton, Link, Toolbar, Typography } from "@mui/material"
import NextLink  from 'next/link';
import { SideMenu } from "./SideMenu";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from "react";
import { UiContext } from '../../context/ui/UiContext';

export const Navbar = () => {

   const {MenuOpen} = useContext(UiContext)

  return (
    <AppBar>{/* Siempre que definamos un NAVBAR nuestra primera propiedad sera AppBar de Material Ui */}
    <Toolbar> {/*Definimos el tollbar para nuestro Navbar */}
        


        {/*Este NextLink lo utilizamos para crear el logo de nuestra App */}
        <NextLink href='/' passHref  /*Siempre definimos el passHref en nuestros link de next para que este valor de la ruta para al link y no tengamos que definirlo */> 
            {/* Para las buenas practicas Next nos recomienda que siempre valla su propiedad Link la cual nombramos NextLink antes de utilizar el link de Material Ui */}
            <Link display='flex' alignItems='center'  >
              <Typography variant='h6' color='white' >Yise |</Typography>
              <Typography  sx={{ marginLeft:0.5, color: '#f44336' }} > frases cada dia </Typography>
            </Link>
        </NextLink>


        <Box flex={1} />

        <IconButton
        size='large'
        edge='start'
        onClick={MenuOpen}
        >
           <MenuOutlinedIcon />
        </IconButton> 
        

           

       </Toolbar> 
     </AppBar>  
  )
}
