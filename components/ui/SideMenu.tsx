import {useContext } from 'react';
import NextLink  from 'next/link';
import { Box, Divider, Drawer, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { UiContext } from '../../context/ui/UiContext';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


export const SideMenu = () => {

  const {SideMenuOpen,CloseMenu} = useContext(UiContext);

  return (

    <Drawer  
    anchor="left" // Declaramos la poscicion que tendra nuestro drawe o sidebar
    open={SideMenuOpen} // Declaramos el valor con que iniciara el drawen Open: Abierto || Close : cerrado   ....... Una vez creado nuestro el context,provider y reducer utilizamos nuestro contexto y colocamos la propiedad que hemos desetructado en nuestro Drawer property Open,
    onClose={CloseMenu}
    >{/* El DRAWER es una propiedad de MATERIAL UI que nos ofrecera el sidebar */}

      <Box sx={{ width: 250,  }} > 
        <Box sx={{ padding: ' 5px 10px ',display:'flex', aliginItems:'center' }}   > {/* la propiedad SX no proporciana estilos propios de css y para ello hacemos dobles llaves  */}
        <Typography variant="h5" > Menu </Typography> 
        
        <Box flex={1} />
    
      </Box>

      <List> {/* Llamamos a nuestra propieda List de MATERIAL Ui que nos ofrecera una lista */}
            
        <ListItem button  > {/* Llamamos a nuestra propieda ListItem de MATERIAL Ui que nos ofrecera una lista  TODO:_ SIEMPRE QUE UTILIZAMOS MAP DEBEMOS UTILIZAR LA PROPIEDAD KEY EN NUESTRO COMPONENTE LA KEY QUE RECIBE ES EL VALOR DEL ARREGLO*/}
              <ListItemIcon>{/* Llamamos a nuestra propieda ListItemIcon de MATERIAL Ui que nos ofrecera una lista de icocnos */}
                 <SendOutlinedIcon />
              </ListItemIcon>
              <ListItemText> {/* Llamamos a nuestra propieda ListItemText de MATERIAL Ui que nos ofrecera una lista para colocar la descripcion de nuestro icono  */}
                  <NextLink href="/" >
                     <Link>
                       Frases
                     </Link>
                  </NextLink>
              </ListItemText>
        </ListItem>
          
      </List>


      </Box>

    </Drawer>

  )
}
