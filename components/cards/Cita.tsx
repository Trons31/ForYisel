import { Box, Button, Typography } from '@mui/material'
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
            <Box>
              <Typography>
              Oh, pienso en
              Todos nuestros años de juventud.
              Sólo estábamos tú y yo.
              Eramos jóvenes y desenfrenados y libres.
              </Typography>
              
              <Typography>
              Ahora nada puede alejarte de mí.
              Hemos estado en ese camino antes,
              Pero eso ha terminado ahora.
              Me tienes regresando por más.
              </Typography>

              <Typography>
              Cariño, eres todo lo que quiero.
              Cuando reposas aquí en mis brazos,
              Encuentro difícil de creer que
              Estamos en el cielo.
              Y el amor es todo lo que necesito.
              Y lo encontré allí, en tu corazón.
              No es tan difícil ver que
              Estamos en el cielo.
              </Typography>

              <Typography>

              Oh, por una vez en tu vida
              Encuentras a alguien
              Que dará vuelta tu mundo,
              Te levantará el ánimo
              Cuando estés deprimida.
              </Typography>

              <Typography>
              Sí, nada podría cambiar
              Lo que significas para mí.
              Oh, hay mucho que podría decir
              Pero ahora sólo abrázame,
              Porque nuestro amor
              Iluminará el camino.
              </Typography>

              <Typography>
              He esperado tanto tiempo
              Para que algo llegara,
              Para que el amor viniera.
              </Typography>

              <Typography>
              Ahora nuestros sueños
              Se hacen realidad.
              A través de los buenos tiempos
              Y los malos,
              Sí, estaré allí cerca de ti.
              </Typography>
            </Box>
          </>
        )
      }
    </>
  )
}

export default Cita