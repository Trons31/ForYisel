import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'; 
import CloseIcon from '@mui/icons-material/Close';



export const SideMenu = () => {


  const [SideMenu, setSideMenu] = useState(false);



  return (

    <>
    
    <IconButton
        size='large'
        edge='start'
        // TODO: Para llamar varias funciones en un evento de OnClik despues de hacer la funcion de flecha debemos abrir llaves y podremos llamar todas las funciones que querramos
        onClick={() => setSideMenu(true)} // Utilizamos la propiedad onclick para cuando le den click a nuestro boton utilizamos el metodo o la funcion que cambiara el estado de nuestro menu para abrirlo
        > {/* Con la propiedad ICONBUTTON podremos agregar iconos a nuestra pagina importados de MATERIAL UI  */}
           <MenuOutlinedIcon /> {/*Lo utilizamos como si fuera un componente normal */}
        </IconButton> 

    <Drawer  
    anchor="left" // Declaramos la poscicion que tendra nuestro drawe o sidebar
    open={ SideMenu} // Declaramos el valor con que iniciara el drawen Open: Abierto || Close : cerrado   ....... Una vez creado nuestro el context,provider y reducer utilizamos nuestro contexto y colocamos la propiedad que hemos desetructado en nuestro Drawer property Open,
    >{/* El DRAWER es una propiedad de MATERIAL UI que nos ofrecera el sidebar */}

      <Box sx={{ width: 250,  }} > 
        <Box sx={{ padding: ' 5px 10px ',display:'flex', aliginItems:'center' }}   > {/* la propiedad SX no proporciana estilos propios de css y para ello hacemos dobles llaves  */}
        <Typography variant="h5" > Menu </Typography> 
        
        <Box flex={1} />
         
        <IconButton
        size='large'
        edge='start'
        // TODO: Para llamar varias funciones en un evento de OnClik despues de hacer la funcion de flecha debemos abrir llaves y podremos llamar todas las funciones que querramos
        onClick={() => setSideMenu(false)} // Utilizamos la propiedad onclick para cuando le den click a nuestro boton utilizamos el metodo o la funcion que cambiara el estado de nuestro menu para abrirlo
        > {/* Con la propiedad ICONBUTTON podremos agregar iconos a nuestra pagina importados de MATERIAL UI  */}
           <CloseIcon/> {/*Lo utilizamos como si fuera un componente normal */}
        </IconButton> 
      </Box>

    
      
      <List> {/* Llamamos a nuestra propieda List de MATERIAL Ui que nos ofrecera una lista */}
        
          
              <ListItem button  > {/* Llamamos a nuestra propieda ListItem de MATERIAL Ui que nos ofrecera una lista  TODO:_ SIEMPRE QUE UTILIZAMOS MAP DEBEMOS UTILIZAR LA PROPIEDAD KEY EN NUESTRO COMPONENTE LA KEY QUE RECIBE ES EL VALOR DEL ARREGLO*/}
                   <ListItemIcon>{/* Llamamos a nuestra propieda ListItemIcon de MATERIAL Ui que nos ofrecera una lista de icocnos */}
                        {/* Nuestro index es el indicador de nuesta poscision en el arreglo y dependiendo de ella alternamos los iconos */}
                   </ListItemIcon>
                   <ListItemText> {/* Llamamos a nuestra propieda ListItemText de MATERIAL Ui que nos ofrecera una lista para colocar la descripcion de nuestro icono  */}
                   
                   </ListItemText>
              </ListItem>
              
         
      </List>


      </Box>

    </Drawer>

    </>
  )
}
