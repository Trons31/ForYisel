import { createTheme } from '@mui/material';


export const DarkTheme = createTheme({
    palette: {
        mode: 'dark', // La propiedad mode es para el modo que queremos que sea el estilo dark: negro o light: un blanco
            secondary: { // Paleta de color que podemos definir para utilizar en nuestro componentes de material 
                main: '#19857b'
            }
            
    },

    components: {
        // TODO: PARA ACCEDER A LOS COMPONENTES DEBEMOS COLOCAR LA PALABRA CLAVE MUI ANTES DEL NOMBRE DEL COMPONENTE EJEMPLO : MIUAPPBAR
        MuiLink: {
          defaultProps: { // Propiedades por defecto como la elevation,underline,positionm,entre otros
            underline: 'none',
          },
        }
    } 
});
