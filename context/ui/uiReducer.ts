import { UiState } from "./";


// Creamos nuestra accion para tiparla y decir que tipo de acciones recibira nuestro SWITCH
type UiActionType = 
|{ type: 'Ui-OpenMenu' } // definimos nuestra primera accion y le decimos que su tipo es del que esta dentro de las comillas de nuestro type
|{type: 'Ui-CloseMenu'}


// para definir varias accion colocamos el caracter de tuberia que es : |


// El reducer es una funcion sumamente sencilla, recibe un estado, una accion, y produce un nuevo estado.
export const uiReducer = ( state:UiState, action : UiActionType ): UiState => { // Recibimos nuestro estado y lo tipamos en esta caso es de tipo Uistate y importamos nuestro interface UiState por lo tanto tendremos las propiedades que estan en la interface UiState y le podremos cambiar el estado, tambien recibimos la accion
//Le decimos que el valor de retorno es de tipo UiState al terminar los parentesis le colocamos ' :  ' y lo tipamos 
// una vez creada nuestra accion la tipamos y le decimos que sera de tipo en esta caso : UiActionType

        switch (action.type) { // Recibimos la accion previamente tipada en nuestro switch para evaluarlas y que entre en su respectivo case.
          case 'Ui-OpenMenu': // recibimos una accion del espeficado tipo
             return{ // regresamos un nuevo estado
               ...state, // Hacemos una copia de todas las propiedades que tiene el state y solo modificamos la que deseamos 
               SideMenuOpen: true,
             }

             case 'Ui-CloseMenu':
              {
                return{
                  ...state,
                  SideMenuOpen: false,
                }
              }

       default:
         return state;
      }

}