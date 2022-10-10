import { Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const Cita = () => {
  const [WordM, setWordM] = useState(false)
  return (
    <>
       <Button onClick={() => setWordM(true)} sx={{ mt:2 }}>
              Ver letra
           </Button>

      {
        WordM &&
        (
          <>
          <Typography>Encontré un amor para mí
          Querida, solo entrégate y sígueme
          Bueno, encontré a una chica, hermosa y dulce
          Oh, nunca supe que tú eras la que estaba esperando por mí</Typography>

          <Typography mt={2}> Porque solo éramos niños cuando nos enamoramos
          Sin saber lo que era
          No te dejaré esta vez
          Pero, querida, solo bésame lentamente
          Tu corazón es todo lo que tengo
          Y, en tus ojos, estás sosteniendo el mío</Typography>
          
         
          <Typography mt={2}>
          Amor, estoy bailando en la oscuridad
          Contigo entre mis brazos
          Descalzos en el césped
          Escuchando nuestra canción favorita
          Cuando dijiste que no te veías bien
          Susurré muy bajito
          Pero lo escuchaste
          Querida, te ves perfecta esta noche</Typography>
          
          <Typography mt={2}>
          Bueno, encontré una mujer
          Más fuerte que cualquiera que conozco
          Ella comparte mis sueños
          Espero que algún día yo comparta su hogar
          Encontré un amor
          Para llevar más que mis secretos
          Para llevar amor, para llevar a nuestros hijos</Typography>
          
          <Typography mt={2}>
          Aún somos niños, pero estamos tan enamorados
          Luchando contra todas las posibilidades
          Sé que estaremos bien esta vez
          Querida, solo toma mi mano
          Sé mi chica, yo seré tu hombre
          Veo mi futuro en tus ojos</Typography>
          
          <Typography mt={2}>
          Amor, estoy bailando en la oscuridad
          Contigo entre mis brazos
          Descalzos en el césped
          Escuchando nuestra canción favorita
          Cuando te vi en ese vestido
          Te veías tan hermosa
          No merezco esto
          Querida, te ves perfecta esta noche</Typography>
          
          <Typography mt={2}>
          Amor, estoy bailando en la oscuridad
          Contigo entre mis brazos
          Descalzos en el césped
          Escuchando nuestra canción favorita
          Tengo fe en lo que veo
          Ahora sé que he conocido un ángel en persona
          Y se ve tan perfecta
          No merezco esto
          Te ves perfecta esta noche</Typography>
          </>
        )
      }
    </>
  )
}

export default Cita