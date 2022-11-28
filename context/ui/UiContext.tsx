import { createContext } from 'react';


interface ContextProps { 
      SideMenuOpen : boolean;

      MenuOpen: () => void;
      CloseMenu: () => void;
 }


// Creamos nuestro contexto y tipamos o creamos los parametros o propiedades que tendra nuestro context para ello una forma muy bonita es con la terminacion AS y el nombre de nuestra props
export const UiContext =  createContext({} as ContextProps );