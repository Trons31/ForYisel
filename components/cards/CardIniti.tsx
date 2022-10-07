import { Box, Card, CardContent, Typography, Button, CardMedia } from '@mui/material'
import React from 'react'

export const CardIniti = () => {
  return (
    <Box 
    display='flex'
    alignItems='center'
    justifyContent='center' 
    marginTop={20}
    padding='0px 10px'
     >
     <Card sx={{ display: 'flex' }}>
       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
         <CardContent sx={{ flex: '1 0 auto' }}>
           <Typography component="div" variant="h5">
               Para ti
           </Typography>
           <Typography variant="subtitle1" color="text.secondary" component="div">
            Yisel Aleman
           </Typography>
         </CardContent>
         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pr:1 }}>
           {/* <Button  onClick={heanledClick} variant='contained' startIcon={<FavoriteIcon />} endIcon={ <FavoriteIcon />} className='btn-init' >
             Haz Click
           </Button> */}
         </Box>
       </Box>
       <CardMedia
         component="img"
         sx={{ width: 151 }}
         image="/love.jpg"
         alt="Live from space album cover"
       />
     </Card>
     </Box>
  )
}
