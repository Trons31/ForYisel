import { createTheme } from '@mui/material';


export const DarkTheme = createTheme({
    palette: {
        mode: 'dark', // La propiedad mode es para el modo que queremos que sea el estilo dark: negro o light: un blanco
            secondary: { // Paleta de color que podemos definir para utilizar en nuestro componentes de material 
                main: '#19857b'
            }
            
    },
});
